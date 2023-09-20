import plotly.express as px
import pandas as pd

from flask import Flask
from flask_restful import Resource, Api

import os
import requests
import base64
import json

app = Flask("SpiderGraphAPI")
api = Api(app)

imgur_client_id = 'c370f764f6238b1'

class SpiderGraph(Resource):

    def get(self, player_id):
        #player_id = context['id']
        player_id = int(player_id)
        data = pd.read_csv('data_preprocessing\Clean_FIFA22_Data.csv')

        attack = ['Crossing', 'Finishing', 'HeadingAccuracy', 'Volleys', 'Curve', 'FKAccuracy',
                    'LongShots', 'ShotPower', 'Penalties']
        handling_passing = ['ShortPassing', 'LongPassing', 'BallControl', 'Dribbling', 'Vision']
        physical = ['Acceleration', 'SprintSpeed', 'Agility', 'Balance', 'Jumping', 'Stamina', 'Strength']
        defense = ['Aggression', 'Interceptions', 'StandingTackle', 'SlidingTackle']
        mental = ['Reactions', 'Composure', 'Positioning']
        goalkeeping = ['GKDiving', 'GKHandling', 'GKKicking', 'GKPositioning', 'GKReflexes']

        l = [attack, handling_passing, physical, defense, mental, goalkeeping]
        allowed_col = [item for sublist in l for item in sublist]

        data = data.drop(data.columns.difference(allowed_col), axis=1)

        #return "reached here"
        attack_vals = []
        handling_passing_vals = 0
        physical_vals = 0
        defense_vals = 0
        mental_vals = 0
        goalkeeping_vals = 0

        for col_name in data.loc[[player_id]]:
            #print(data.loc[row_index, col_name])
            col_val = data.loc[player_id, col_name]

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
        #fig.show()
        #return 5

        if not os.path.exists("images"):
            os.mkdir("images")
            
        fig.write_image("images/fig.jpeg")

        url = "https://api.imgur.com/3/upload.json"
        headers = {"Authorization": f"Client-ID {imgur_client_id}"}
                   
        with open("images/fig.jpeg", "rb") as file:
            data = file.read()
            base64_data = base64.b64encode(data)
            response = requests.post(url, headers=headers, data={"image": base64_data})
            url = response.json()["data"]["link"]

        return url  

api.add_resource(SpiderGraph, '/graphs/<player_id>')

if __name__ == '__main__':
   app.run() 