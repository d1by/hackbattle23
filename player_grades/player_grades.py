import pandas as pd
import regex as re

data = pd.read_csv('data_preprocessing\Clean_FIFA22_Data.csv')

attack = ['Crossing', 'Finishing', 'HeadingAccuracy', 'Volleys', 'Curve', 'FKAccuracy',
            'LongShots', 'ShotPower', 'Penalties']
handling_passing = ['ShortPassing', 'LongPassing', 'BallControl', 'Dribbling', 'Vision']
physical = ['Acceleration', 'SprintSpeed', 'Agility', 'Balance', 'Jumping', 'Stamina', 'Strength']
defense = ['Aggression', 'Interceptions', 'StandingTackle', 'SlidingTackle']
mental = ['Reactions', 'Composure', 'Positioning']
goalkeeping = ['GKDiving', 'GKHandling', 'GKKicking', 'GKPositioning', 'GKReflexes']

l = [attack, handling_passing, physical, defense, mental, goalkeeping]
allowed_cols = [item for sublist in l for item in sublist]
allowed_cols.append('Club')
allowed_cols.append('Name')
allowed_cols.append('Overall')
allowed_cols.append('Wage')

data = data.drop(data.columns.difference(allowed_cols), axis=1)
data['Wage'] = data['Wage'].replace("[$]", "", regex=True)

grade = []
attack_ls = [0] * data.shape[0]
handling_passing_ls = [0] * data.shape[0]
physical_ls = [0] * data.shape[0]
defense_ls = [0] * data.shape[0]
mental_ls = [0] * data.shape[0]
goalkeeping_ls = [0] * data.shape[0]

for row_index in range(data.shape[0]):
    attack_vals = 0
    handling_passing_vals = 0
    physical_vals = 0
    defense_vals = 0
    mental_vals = 0
    goalkeeping_vals = 0
    for col in data.loc[[row_index]]:
        if(col == 'Club' or col == 'Name' or col == 'Overall'):
            continue

        val = data[col].iloc[row_index]

        if(col == 'Wage' and val[-1] != 'K'):
            val = float(val) / 100000
            continue

        if(col in attack):
            attack_vals+=val
        elif(col in handling_passing):
            handling_passing_vals+=val
        elif(col in physical):
            physical_vals+=val
        elif(col in defense):
            defense_vals+=val
        elif(col in mental):
            mental_vals+=val
        elif(col in goalkeeping):
            goalkeeping_vals+=val

        attack_ls[row_index] = attack_vals
        handling_passing_ls[row_index] = handling_passing_vals
        physical_ls[row_index] = physical_vals
        defense_ls[row_index] = defense_vals
        mental_ls[row_index] = mental_vals
        goalkeeping_ls[row_index] = goalkeeping_vals

    # overall_val = data['Overall'].iloc[row_index]
    # if(overall_val > 90):
    #     grade.append('S')
    # elif(overall_val > 85):
    #     grade.append('A')
    # elif(overall_val > 80):
    #     grade.append('B')
    # elif(overall_val > 75):
    #     grade.append('C')
    # elif(overall_val > 70):
    #     grade.append('D')
    # else:
    #     grade.append('F')

# data['Rating'] = grade

data['Attack'] = attack_ls
data['Handling_Passing'] = handling_passing_ls
data['Physical'] = physical_ls
data['Defense'] = defense_ls
data['Mental'] = mental_ls
data['Goal Keeping'] = goalkeeping_ls

data = data.drop(data.columns.difference(['Attack', 'Handling_Passing', 'Physical',
                                         'Defense', 'Mental', 'Goal Keeping', 'Name', 'Club', 'Wage']), axis=1)

data['Wage'] = data['Wage'].replace("[K]", "", regex=True).astype(float)
data = data.fillna(0)

print(data.head())

data.to_csv('player_grades\Grading_Data.csv')