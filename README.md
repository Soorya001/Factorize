# Factorize

A react based web-app served using a Flask server. The app was built to analyze a twitter profile and the provided tweet using a link provided of a particular tweet.
It uses a machine learning model to classify the profile as 1. Human 2. Bot. 
The classification is performed on the basis of various parameters which are obtained through the twitter API, which is then fed into the model.
The content of the tweet is web-scrapped using google-search package to obtain links related to the contents of the tweet

## ./Backend
### backend.py
The front is served using a flask server, which uses tweepy for twitter API, and pickle for importing the Machine Learning model which is used for profiling.
It also incorporates the usage of googlesearch package which acts a basic web-scraping tool to obtain links related to the tweeted content.


### finalprofiler.py and profiler.py
They are the files which are contain code for data preprocessing and training of the model


### webscrap.py
Used for testing out various methods to scrap the required information

