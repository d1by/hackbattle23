# 🛡️ EvoPacts

**Smart. Secure. Safe. Contracts.**  
EvoPacts is a blockchain-powered platform to automate, enforce, and transparently manage contracts—specifically tailored for sports teams and players. Our system ensures **fair terms**, **secure payments**, and **transparent deals**, simplifying the Quality of Life for all stakeholders involved in sports contracts.

---

## 🚀 Features

- 🧠 **AI-Backed Contract Assessment**  
  Uses ML algorithms to evaluate fairness and relevance of contract terms using player performance data and predefined contractual criteria.

- 🔐 **Blockchain-Powered Contract Enforcement**  
  Smart contracts ensure tamper-proof, real-time adherence to agreements between clubs and players.

- 💸 **Cryptocurrency Payment Integration**  
  Automated salary payments using crypto for fraud-proof, instant transactions.

- 📄 **Transparent Contracts**  
  Store all contracts on-chain, making them accessible and verifiable by all clubs—ensuring full transparency and auditability.

- 📊 **Visual Analytics**  
  Player performance and contract metrics visualized using interactive graphs (Spider Graphs, Plotly).

---

## 🧰 Tech Stack

### Frontend
- **React.js**
- **Redux**
- **Vite**
- **Tailwind CSS**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

### Blockchain
- **Solidity** (Smart Contracts)
- **Truffle** (Development & Deployment)
- **Ganache** (Local Blockchain)
- **Web3.js** (Client-Blockchain Communication)

### Machine Learning & Visualization
- **Python** (Flask REST API)
- **Scikit-learn**, **PyTorch** – Model training & evaluation
- **Matplotlib**, **Plotly**, **Kaleido** – Visual insights
- **Pandas**, **Regex** – Data cleaning & preprocessing

---

## 📂 Repository Structure

```

├── blockScanner/            # Blockchain utilities for scanning transactions
├── build/contracts/         # Compiled smart contracts (JSON ABI)
├── client/                  # Frontend (React + Vite)
├── contracts/               # Solidity smart contracts
├── data\_preprocessing/      # Preprocessing scripts for ML model
├── ml\_regression/           # ML models to evaluate fairness of terms
├── migrations/              # Truffle migrations
├── player\_grades/           # Player grading logic
├── server/                  # Backend Express server
├── spider\_graph/            # Player visual performance graphs
├── test/                    # Smart contract tests
├── abi.json                 # ABI for frontend to interact with contracts
├── truffle-config.js        # Truffle configuration
└── requirements.txt         # Python dependencies

````

---

## ⚙️ Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/<your-org>/EvoPacts.git
cd EvoPacts
````

### 2. Smart Contract Setup

```bash
cd contracts
truffle compile
truffle migrate --network development
```

Ensure **Ganache** is running on port `7545`.

### 3. Backend (Node.js)

```bash
cd server
npm install
npm start
```

### 4. Frontend (React + Vite)

```bash
cd client
npm install
npm run dev
```

### 5. ML Flask Server (Python)

```bash
cd ml_regression
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

---

## ✅ Requirements

```txt
Flask==2.3.3
flask_restful==0.3.10
matplotlib==3.7.1
pandas==1.5.2
plotly==5.17.0
regex==2023.8.8
Requests==2.31.0
scikit_learn==1.2.2
torch==2.0.1
kaleido==0.2.1
```

---

## 📌 Project Info

* 🏆 Built for **HackBattle 2023**
* 👨‍💻 Team: **"unemployed"**
* 🎨 Figma Design: [Click to View](https://www.figma.com/file/9lG3MjZryf1xv1qHTRjFcS/EvoPacts?type=design&node-id=4%3A135&mode=design&t=Ol2I30vUy3kMcpGC-1)

---

## 📍 Deployment

You can deploy the MERN stack with services like **Render**, **Vercel**, or **Heroku**, and deploy smart contracts using **Infura** or **Alchemy** connected to **Ethereum testnets/mainnets**.

---

## 📬 Contact

**EvoPacts Team**
VIT University Vellore
Tamil Nadu - 632014

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
