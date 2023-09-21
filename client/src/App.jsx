import "./App.css";
import Landing from "./Components/Landing";
import Moto from "./Components/Moto";
import Use from "./Components/Use";
import Footer from "./Components/Footer";
import NFTMintingComponent from "./Components/NFT";
import Contract from "./Components/Contract";
import { useLocation } from "react-router-dom";
import BigCard from "./Components/BigCard";

function App(props) {
  const location = useLocation();
  const state = location.state;
  return (
    <div className="App">
      <Landing state={props.state} />
      <Moto />
      <Use />
      <Footer />
      <BigCard />
    </div>
  );
}

export default App;
