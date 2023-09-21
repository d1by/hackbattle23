function Contract() {
  return (
    <div className="bg-[#262626] ">
      <form action="" className="flex">
        <div className="flex  justify-center pt-16 pl-5">
          <div className="contract flex gap-12 flex-col pt-8 items-start  ">
            <h1 className="font-bold pl-8 text-7xl text-white underline">
              Contract
            </h1>
            <img className="pl-8" src="./images/pogba.png" alt="" />

            <div className="text-7xl text-white underline pl-5">Pogba</div>
            <div className="text-7xl text-white underline pl-5">Al-Hihal</div>
            <div className="text-7xl text-white underline pl-5">
              $100,000.00
            </div>
          </div>
        </div>
        <div className="pl-8 pt-16">
          <div className="flex flex-col items-start">
            <input
              className=" px-5 py-6 border-b border-[#D9D9D9] text-5xl text-[#DDFB00] b-0 bg-transparent placeholder:text-[#DDFB00] placeholder:text-5xl"
              type="text"
              placeholder="Pogba"
            />
            <input
              className="px-5 py-6 border-b border-[#D9D9D9] text-5xl text-[#DDFB00]  b-0 bg-transparent placeholder:text-[#DDFB00] placeholder:text-5xl"
              type="text"
              placeholder="Al-Hilal"
            />
            <input
              className="px-5 py-6 border-b border-[#D9D9D9] text-5xl text-[#DDFB00]  b-0 bg-transparent placeholder:text-[#DDFB00] placeholder:text-5xl"
              type="text"
              placeholder="$100,000.00"
            />
          </div>
          <div className="flex pt-5">
            <div className="">
              <img src="./images/clause.png" alt="" />
            </div>
            <div className="pl-8">
              <div className="text-[#DDFB00] text-7xl ">TERMS</div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
              <div className="text-xl text-white pt-2">
                Loisbf gsghuwh gu uigiubgsb gb sgibgbi sbhgbdfbhvbfhdbvhb
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contract;
