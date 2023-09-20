function Use() {
  return (
    <div className="use p-8">
      <div className="flex flex-col items-start text-white gap-5">
        <h3 className="text-2xl">Our Benefits</h3>
        <h1 className="text-6xl">WHERE WE COME IN</h1>
        <div>
          <div className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          </div>
          <div className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          </div>
          <div className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          </div>
        </div>
      </div>
      <div className="flex gap-48 justify-center pt-16 pb-12 ">
        <div className="mycard flex flex-col pt-8 items-start gap-2 bg-transparent backdrop-blur">
          <img src="./images/1st.png" alt="" />
          <h1 className="font-bold pl-8 text-xl text-[#DD6A00]">FAIR TERMS</h1>
          <h4 className=" pl-8 text-start text-white">
            Suitable for Solo Travelers, or Small Student Groups.
          </h4>
        </div>
        <div className="mycard flex flex-col pt-8 items-start w-64 gap-2 bg-transparent backdrop-blur ">
          <img src="./images/2nd.png" alt="" />
          <h1 className="font-bold pl-8 text-xl text-[#DD6A00]">
            SECURE PAYMENTS
          </h1>
          <h4 className=" pl-8 text-start text-white">
            Perfect to spend some quality love with your special someone!
          </h4>
        </div>
        <div className="mycard flex flex-col pt-8 items-start w-64 gap-2 bg-transparent backdrop-blur ">
          <img src="./images/3rd.png" alt="" />
          <h1 className="font-bold pl-8 text-start text-xl text-[#DD6A00]">
            TRANSPARENT CONTRACTS
          </h1>
          <h4 className=" pl-8 text-start text-white">
            Itineraries custom tailored, to have an optimal balance.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Use;
