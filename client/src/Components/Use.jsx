function Use() {
  return (
    <div className="use p-8">
      <div className="flex flex-col items-start text-white gap-5">
        <h3 className="text-2xl">Our Benefits</h3>
        <h1 className="text-6xl">WHERE WE COME IN</h1>
        <div className="flex flex-col items-start">
          <p className="pt-3 text-xl">
            We are simplifying the Quality of Life of a player and a club
          </p>
          <p className="pt-3 text-xl">
            regarding contracts by creating a hassle-free platform to manage
            contracts and players alike.`
          </p>
        </div>
        `
      </div>
      <div className="flex gap-48 justify-center pt-16 pb-12 ">
        <div className="mycard flex flex-col pt-8 items-start gap-2 bg-transparent backdrop-blur">
          <img src="./images/1st.png" alt="" />
          <h1 className="font-bold pl-8 text-xl text-[#DD6A00]">FAIR TERMS</h1>
          <p className=" pl-8 text-start text-white">
            Relevant player data is extracted from a large dataset and data is
            analysed in order to arrive at the optimal contractual terms based
            on the various criteria by contractual signatories.
          </p>
        </div>
        <div className="mycard flex flex-col pt-8 items-start w-64 gap-2 bg-transparent backdrop-blur ">
          <img src="./images/2nd.png" alt="" />
          <h1 className="font-bold pl-8 text-xl text-[#DD6A00]">
            SECURE PAYMENTS
          </h1>
          <p className=" pl-8 text-start text-white">
            With the enforcement of contracts, the payment of the salary is done
            using cryptocurrency to ensure non-manipulation of
            pre-determined contract terms.
          </p>
        </div>
        <div className="mycard flex flex-col pt-8 items-start w-64 gap-2 bg-transparent backdrop-blur ">
          <img src="./images/3rd.png" alt="" />
          <h1 className="font-bold pl-8 text-start text-xl text-[#DD6A00]">
            TRANSPARENT CONTRACTS
          </h1>
          <p className=" pl-8 text-start text-white">
            Contracts of players are stored on the blockchain and can be freely
            viewed by other teams, for a more fluid contractual world.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Use;
