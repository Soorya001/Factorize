import numpy as np
import pandas as pd
import pickle

df1 = pd.read_pickle('finalDFimp.pkl')

print(len(df1))

for inx, rows in df1.iterrows():
    if rows[8] == None:
        df1.drop(inx)

df = df1
df.dropna(inplace = True)

from sklearn.svm import SVC
from sklearn.metrics import classification_report, confusion_matrix
from sklearn.model_selection import train_test_split
from datetime import datetime


dt = []

for index, rows in df.iterrows():

    dates = rows[5]
    dates = dates[:18] + dates[24:]
    date_time_obj = datetime.strptime(dates, '%a %b %d %H:%M:%S %Y').strftime('%d/%m/%Y')

    present = datetime.strptime('31/12/2019', "%d/%m/%Y")
    past = datetime.strptime(date_time_obj, "%d/%m/%Y")

    diff = (present - past).days

    dt.append(diff)

df['creation'] = dt

#print(df.columns.values.tolist())

x = df[['status_count', 'friends_count', 'creation', 'favs', 'verified', 'listed_count']]
y = df['label'].astype('int')

x.reset_index(drop=True, inplace=True)
y.reset_index(drop=True, inplace=True)

#print(x)

from sklearn import preprocessing
x = preprocessing.normalize(x)

#print(x)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.25)


from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train, y_train)
predictions = model.predict(x_test)
print("\nLOGISTIC REGRESSION CONFUSION MATRIX\n")
mat1 = (confusion_matrix(y_test, predictions))
print(mat1)
print((mat1[0][0]+mat1[1][1]) / (mat1[0][0] + mat1[1][1] + mat1[0][1] + mat1[1][0]))


# print(type(x), type(y))
# print(x_train , y_train)


from sklearn.neighbors import KNeighborsClassifier
knn = KNeighborsClassifier(n_neighbors=20)
knn.fit(x_train, y_train)
knnpred = knn.predict(x_test)
print("\nKNN CONFUSION MATRIX\n")
mat1 = (confusion_matrix(y_test, knnpred))
print(mat1)
print((mat1[0][0]+mat1[1][1]) / (mat1[0][0] + mat1[1][1] + mat1[0][1] + mat1[1][0]))


from sklearn.tree import DecisionTreeClassifier
dtree = DecisionTreeClassifier(random_state=101,max_features=None, min_samples_leaf=55)
dtree.fit(x_train, y_train)
print(type(x_test), ' THATS the type: ')
treepred = dtree.predict(x_test)

pickle.dump(dtree, open('modelimp.pkl', 'wb'))

print("\nTREE CONFUSION MATRIX\n")
mat1 = (confusion_matrix(y_test, treepred))
print(mat1)
print((mat1[0][0]+mat1[1][1]) / (mat1[0][0] + mat1[1][1] + mat1[0][1] + mat1[1][0]))


