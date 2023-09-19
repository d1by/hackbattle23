import logo from "./logo.svg";
import "./App.css";

function App() {
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };
  return (
    <div className="App">
      <button onClick={connectWallet}>Connect to Wallet</button>
    </div>
  );
}

export default App;
