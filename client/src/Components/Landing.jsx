import Moto from "./Moto";
import Navbar from "./Navbar";
function Landing() {
  return (
    <div className="landing ">
      <Navbar />
      <div className="flex pl-32 pt-12 pb-8 flex-col items-start text-white text-8xl">
        <h1 className="py-2">Lorem ipsum</h1>
        <h1 className="py-2">dolor sit amet</h1>
      </div>
    </div>
  );
}

export default Landing;
