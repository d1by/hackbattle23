import pandas as pd
import matplotlib.pyplot as plt
import regex as re

# included_cols = [1,2,]
# data = {}
# def load_data():
#     # key=0
#     # with open('data_preprocessing\FIFA22_official_data.csv', encoding='utf8') as csvfile:
#     #     reader = csv.reader(csvfile)
#     #     for row in reader:
#     #         data[key] = list(row[i] for i in included_cols)
#     #         key+=1 
#     #     print(data)
#     data['names'] = df.Name
#     data['age'] = df.Age
#     data['nationality'] = df.Nationality
#     data['overall'] = df.Overall
#     data['potential'] = df.Potential

# load_data()
data = pd.read_csv('data_preprocessing\FIFA22_official_data.csv')

ignore_cols = ['ID', 'Photo', 'Flag', 'Club Logo', 'Special', 'Body Type', 'Real Face', 'Jersey Number',
               'Joined', 'Loaned From', 'Marking']

data = data.drop(ignore_cols, axis=1).reset_index(drop=True)
data['Value'] = data['Value'].replace("€", "$", regex=True)
data['Wage'] = data['Wage'].replace("€", "$", regex=True)
data['Release Clause'] = data['Release Clause'].replace("€", "$", regex=True)
data['Position'] = data['Position'].replace("<.*>", "", regex=True)
data['Contract Valid Until'] = data['Contract Valid Until'].replace("[a-zA-Z]*.*, ", "", regex=True) 

# for row_index in range(data.shape[0]):
#     for col_index in data.loc[[row_index]]:
#         if data[col_index][row_index] == 'NaN':
#             data = data.drop(index=row_index, axis=0, inplace=True).reset_index(drop=True)

data.to_csv('data_preprocessing\Clean_FIFA22_Data.csv')

#print(data.head()[['Value', 'Wage', 'Position', 'Contract Valid Until', 'Release Clause']])