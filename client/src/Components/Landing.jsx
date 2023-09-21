import Navbar from "./Navbar";
function Landing() {
  return (
    <div className="landing " id="home">
      <Navbar />
      <div className="flex pl-32 pt-12 pb-8 flex-col items-start text-white ">
        <h6 className="py-2 ">About</h6>
        <h1 className="py-2 text-8xl">SMART,SECURE,SAFE</h1>
        <h1 className="py-2 text-8xl">CONTRACTS</h1>
        <div className="pt-3">
          <button className="bg-transparent border-2 border-[#DD6A00] text-[#DD6A00] text-4xl rounded py-3 px-4 hover:text-white hover:bg-[#DD6A00]">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
