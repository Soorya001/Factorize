import numpy as np
import pandas as pd

data = pd.read_json('gilani-2017_tweets.json')

lables = pd.read_csv('gilani-2017.tsv', sep='\t')


id = []
name = []
status_count = []
follow_count = []
friends_count = []
location = []
creation = []
favs = []
language = []
verified = []
listed_count = []


for person in data['user']:
    id.append(person['id'])
    name.append(person['name'])
    status_count.append(person['statuses_count'])
    follow_count.append(person['followers_count'])
    friends_count.append(person['friends_count'])
    location.append(person['location'])
    creation.append(person['created_at'])
    favs.append(person['favourites_count'])
    language.append(person['lang'])
    verified.append(person['verified'])
    listed_count.append(person['listed_count'])


# print(len(id))
# print(len(name))
# print(len(status_count))
# print(len(friends_count))
# print(len(location))
# print(len(creation))
# print(len(favs))
# print(len(language))

a = {'id':id, 'name': name, 'status_count':status_count, 'friends_count':friends_count, 'location':location, 'creation':creation, 'favs':favs, 'language':language, 'verified': verified, 'listed_count': listed_count, 'label':[]}

df = pd.DataFrame.from_dict(a, orient='index')
df = df.transpose()

yval = pd.DataFrame(lables)
yval.columns = ['id', 'label']

yval = yval.sort_values('id').reset_index()
yval = yval.drop(['index'], axis=1)


df = df.sort_values('id').reset_index()
df = df.drop(['index'], axis=1)

print(df.head(), yval.head())


for ind1, row1 in df.iterrows():
    print(ind1)
    for ind2, row2 in yval.iterrows():
        if row1[0] == row2[0]:
            print(row1[0], row2[0])
            if row2[1] == "human":
                print(1)
                df.at[ind1, 'label'] = 1
            else:
                print(0)
                df.at[ind1, 'label'] = 0
            break



print(df)
df.to_pickle('finalDFimp.pkl')    #to save the dataframe, df to finalDF




