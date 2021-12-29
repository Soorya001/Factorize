import json
import numpy as np
import pandas as pd
from flask import Flask, redirect, url_for, request, jsonify, render_template, request, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

import pickle
import tweepy
from datetime import datetime


import requests, webbrowser
from bs4 import BeautifulSoup

try:
	from googlesearch import search
except ImportError:
	print("No module named 'google' found")



auth = tweepy.OAuthHandler("ceLwEjBixaZRHoMVuHMejhDPu", "Hs6wXdg5xQCFJrLGzWeuXC1aGUgmBbjBPcOi75njcJqbfzF5Sd")
auth.set_access_token("1274289861495681024-MJ1kdu2nMAIZMgHGIKD31FlLDJ0wv9", "wMvjlivMQjMh6u8j1nLA02xSl6MSrUlT5uYlmAaYvMhi0")

api = tweepy.API(auth)


app = Flask(__name__, static_url_path='', static_folder='../frontend/build')
CORS(app)

model = pickle.load(open('./modelimp.pkl', 'rb'))

toret = int(0)
user = {}

@app.route("/", defaults={'path':''})
def serve(path):
    return send_from_directory(app.static_folder,'index.html')


@app.route('/test', methods=['GET'])
def test():
    return{
        'test': 'test1'
    }


@app.route('/tlink', methods=['POST', 'GET'])
def get_tlink():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        # data contains the URL

        names = list(data['val'].split('/'))

        screen_name = names[3]
        statid = names[5]

        print("screen name: ", screen_name, statid)
        global user

        user = (api.get_user(screen_name = screen_name))
        user = json.dumps(user._json)
        #print(type(user))

        #profile_img = api.get_profile_banner(screen_name)
        #print('link : ', profile_img)

        user = json.loads(user)
        print(user)

        status = api.get_status(statid, tweet_mode="extended")
        full_text = status.full_text
        #text = status.text
        print("The text of the status is : \n\n" + full_text)


        # we need profile pic: profile_image_url
        #         profile banner: profile_banner_url

        profile_url = user['profile_image_url']
        banner_url = user['profile_banner_url']
        name = user['name']

        user['stattext'] = full_text

        desc = user
        stat_cnt = desc['followers_count']
        followers = stat_cnt

        frd_cnt = desc['friends_count']
        dates = desc['created_at']
        favs_cnt = desc['favourites_count']

        dates = dates[:18] + dates[24:]
        date_time_obj = datetime.strptime(dates, '%a %b %d %H:%M:%S %Y').strftime('%d/%m/%Y')
        present = datetime.strptime('26/06/2021', "%d/%m/%Y")
        past = datetime.strptime(date_time_obj, "%d/%m/%Y")

        diff = (present - past).days

        verified = desc['verified']
        list_count = desc['listed_count']

        print(stat_cnt, frd_cnt, diff, favs_cnt, verified, list_count)

        data = [[stat_cnt, frd_cnt, diff, favs_cnt, verified, list_count]]

        df = pd.DataFrame(data, columns=['stat_cnt', 'frd_cnt', 'diff', 'favs_cnt', 'verified', 'listed_count'])

        print("before acc: ")
        acc = model.predict(df)
        global toret
        toret = acc[0]
        print("After acc: ", acc[0])

        return 'Done'

    if request.method == 'GET':
        print("we can send this too: ", user)
        if toret == 1:
            return json.dumps({'data': user, 'pred': 1})
        else:
            return json.dumps({'data': user, 'pred': 0})


@app.route('/tlink_webscrap', methods=['GET'])
def send_scrap():
    print(user['stattext'])

    user_input = user['stattext']
    print("GOING TO SEARCH: ", user_input)
    links = search(user_input)

    return json.dumps({'links': links[:5]})


@app.route('/flink', methods=['POST', 'GET'])
def det_flink():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        return 'Done'

if __name__ == "__main__":
    app.run(debug=True)