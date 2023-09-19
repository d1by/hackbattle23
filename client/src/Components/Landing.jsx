import Navbar from "./Navbar";
function Landing() {
  return (
    <div className="landing ">
      <Navbar />
      <div className="flex pt-16 pb-80 px-40 flex-col items-start text-white text-8xl">
        <h1 className="py-2">Lorem ipsum</h1>
        <h1 className="py-2">dolor sit amet</h1>
      </div>
    </div>
  );
}

export default Landing;
