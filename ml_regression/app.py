import plotly.express as px
import pandas as pd

import torch
from torch import nn
from sklearn.preprocessing import StandardScaler

from flask import Flask
from flask_restful import Resource, Api


app = Flask("LinRegAPI")
api = Api(app)

class LinReg(Resource):

    def get(self, context):
        attack = context['attack']
        handling_passing = context['handling_passing']
        physical = context['physical']
        defense = context['defense']
        mental = context['mental']
        goal_keeping = context['goal keeping']

        x = [attack, handling_passing, physical, defense, mental, goal_keeping]
        x = torch.tensor(x, dtype=torch.float32)

        # df = pd.read_csv('player_grades\Grading_Data.csv')

        # df = df[['Attack', 'Handling_Passing', 'Physical', 'Defense', 'Mental', 'Goal Keeping', 'Wage']]

        # feat = df[['Attack', 'Handling_Passing', 'Physical', 'Defense', 'Mental', 'Goal Keeping']]
        # target = df[['Wage']]

        class LinearRegressionModel(nn.Module):
            def __init__(self):
                super().__init__()
                #self.weights = nn.Parameter(torch.randn(6, 1, dtype=torch.float, requires_grad=True))
                #self.bias = nn.Parameter(torch.randn(1, dtype=torch.float, requires_grad=True))
                self.linear_layer = nn.Linear(in_features=6, 
                                            out_features=1)

            def forward(self, x : torch.Tensor) -> torch.Tensor:
                # return torch.mm(X, self.weights) + self.bias
                return self.linear_layer(x)
            
        model_save_path = 'ml_regression\models\model.pth'
        loaded_model = LinearRegressionModel()
        loaded_model.load_state_dict(torch.load(f=model_save_path))

        with torch.inference_mode():
            y_preds = loaded_model(x)

        f = open('ml_regression\multi.txt')
        multi = int(f.read())
        return y_preds*multi

api.add_resource(LinReg, '/wage/<context>')

if __name__ == '__main__':
    app.run() 