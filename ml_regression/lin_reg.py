import torch
from torch import nn
from sklearn.preprocessing import StandardScaler
import pandas as pd
#import matplotlib.pyplot as plt

# w = torch.tensor([[50.],
#                   [20.],
#                   [40.],
#                   [50.],
#                   [10.],
#                   [10.]
#                   ])
# b = torch.tensor([[500.],
#                   [400.],
#                   [500.],
#                   [200.],
#                   [250.],
#                   [50.0]
#                   ])

df = pd.read_csv('player_grades\Grading_Data.csv')

df = df[['Attack', 'Handling_Passing', 'Physical', 'Defense', 'Mental', 'Goal Keeping', 'Wage']]

feat = df[['Attack', 'Handling_Passing', 'Physical', 'Defense', 'Mental', 'Goal Keeping']]
target = df[['Wage']]


X = torch.tensor(feat.values, dtype=torch.float32)
y = torch.tensor(target.values, dtype=torch.float32)

# print(X)
# print(y)

# def normalize(data):
#     data_mean = torch.mean(data, dim=0)
#     data_max = torch.max(data, dim=0)[0]
#     data_min = torch.min(data, dim=0)[0]
#     data = (data-data_mean)/(data_max - data_min)
#     return data

# X = normalize(X)

print(X)
print(y)

train_split = int(0.8*len(X))

X_train, y_train = X[:train_split], y[:train_split]
X_test, y_test = X[train_split:], y[train_split:]

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_train = torch.tensor(X_train, dtype=torch.float32)

X_test = scaler.transform(X_test)
X_test = torch.tensor(X_test, dtype=torch.float32)

# y_train /= 1000
y_train = scaler.fit_transform(y_train)
y_train = torch.tensor(y_train, dtype=torch.float32)

# y_test /= 1000
y_test = scaler.transform(y_test)
y_test = torch.tensor(y_test, dtype=torch.float32)

print(len(X_train), len(y_train), len(X_test), len(y_test))

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
    
model = LinearRegressionModel()
loss_fn = nn.MSELoss()
optimizer = torch.optim.SGD(params=model.parameters(), lr=0.0001)

torch.manual_seed(42)
epochs=10000

for epoch in range(epochs):
    #training
    model.train()

    y_pred = model(X_train)

    loss = loss_fn(y_pred, y_train)

    optimizer.zero_grad()

    loss.backward()
    
    optimizer.step()

    #testing
    model.eval()
    with torch.inference_mode():
        test_pred = model(X_test)
        test_loss = loss_fn(test_pred, y_test)

    if(epoch % 1000 == 0):
        print(f"Epoch: {epoch} | MSE Training Loss: {loss} | MSE Test Loss: {test_loss}")

print(model.state_dict())

model.eval()

with torch.inference_mode():
    y_preds = model(X_test)

multi = y[0] / y_preds[0]
print(y_preds*multi)

f = open("ml_regression\multi.txt", "w")
f.write(str(float(multi[0])))
f.close()

from pathlib import Path

model_path = Path('ml_regression\models')
model_path.mkdir(parents=True, exist_ok=True)

model_name = "model.pth"
model_save_path = model_path / model_name

print(f"Saving model to {model_save_path}")
torch.save(obj=model.state_dict(), f=model_save_path)