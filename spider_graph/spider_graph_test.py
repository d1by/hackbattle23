import plotly.express as px
import pandas as pd

context = {
    'id' : 90
}

player_id = context["id"]

data = pd.read_csv('data_preprocessing\Clean_FIFA22_Data.csv')

attack = ['Crossing', 'Finishing', 'HeadingAccuracy', 'Volleys', 'Curve', 'FKAccuracy',
            'LongShots', 'ShotPower', 'Penalties']
handling_passing = ['ShortPassing', 'LongPassing', 'BallControl', 'Dribbling', 'Vision']
physical = ['Acceleration', 'SprintSpeed', 'Agility', 'Balance', 'Jumping', 'Stamina', 'Strength']
defense = ['Aggression', 'Interceptions', 'StandingTackle', 'SlidingTackle']
mental = ['Reactions', 'Composure', 'Positioning']
goalkeeping = ['GKDiving', 'GKHandling', 'GKKicking', 'GKPositioning', 'GKReflexes']

# allowed_col = ['Crossing', 'Finishing', 'HeadingAccuracy', 'ShortPassing', 'Volleys', 
#                                     'Dribbling', 'Curve', 'FKAccuracy', 'LongPassing', 'BallControl', 'Acceleration',
#                                     'SprintSpeed', 'Agility', 'Reactions', 'Balance', 'ShotPower', 'Jumping',
#                                     'Stamina', 'Strength', 'LongShots', 'Aggression', 'Interceptions',
#                                     'Positioning', 'Vision', 'Penalties', 'Composure', 'StandingTackle', 
#                                     'SlidingTackle', 'GKDiving', 'GKHandling', 'GKKicking', 'GKPositioning', 
#                                     'GKReflexes']

l = [attack, handling_passing, physical, defense, mental, goalkeeping]
allowed_col = [item for sublist in l for item in sublist]

data = data.drop(data.columns.difference(allowed_col), axis=1)

# print(data.head())

# ['Crossing', 'Finishing', 'HeadingAccuracy', 'ShortPassing', 'Volleys', 
#                                     'Dribbling', 'Curve', 'FKAccuracy', 'LongPassing', 'BallControl', 'Acceleration',
#                                     'SprintSpeed', 'Agility', 'Reactions', 'Balance', 'ShotPower', 'Jumping',
#                                     'Stamina', 'Strength', 'LongShots', 'Aggression', 'Interceptions',
#                                     'Positioning', 'Vision', 'Penalties', 'Composure', 'StandingTackle', 
#                                     'SlidingTackle', 'GKDiving', 'GKHandling', 'GKKicking', 'GKPositioning', 
#                                     'GKReflexes']

for row_index in range(data.shape[0]):
    if(row_index != player_id):
        continue

    attack_vals = []
    handling_passing_vals = 0
    physical_vals = 0
    defense_vals = 0
    mental_vals = 0
    goalkeeping_vals = 0

    for col_name in data.loc[[row_index]]:
        #print(data.loc[row_index, col_name])
        col_val = data.loc[row_index, col_name]

        if(col_name in attack):
            attack_vals+=col_val
        elif(col_name in handling_passing):
            handling_passing_vals+=col_val
        elif(col_name in physical):
            physical_vals+=col_val
        elif(col_name in defense):
            defense_vals+=col_val
        elif(col_name in mental):
            mental_vals+=col_val
        elif(col_name in goalkeeping):
            goalkeeping_vals+=col_val
        else:
            continue
    
    graph_range = [attack_vals, handling_passing_vals, physical_vals, defense_vals, mental_vals, goalkeeping_vals]

    df = pd.DataFrame(dict(
        r=graph_range,
        theta = ['attack', 'handling and passing', 'physical', 'defense', 'mental', 'goalkeeping']))
    
    fig = px.line_polar(df, r='r', theta='theta', line_close=True)
    fig.update_traces(fill='toself')
    fig.show()