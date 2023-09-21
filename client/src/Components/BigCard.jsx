function Player() {
  return (
    <div className="play  ">
      <div className="flex justify-between p-3">
        <div className="text-[#5cb770]">EUROPE ITALIAN LEAGUE</div>
        <img src="./images/football.png" alt="" />
      </div>
      <hr className="line" />
      <div className="flex justify-between">
        <div className="gap-3 flex flex-col">
          <div className="flex pl-5 flex-col gap-4 items-start">
            <div className="text-8xl font-bold text-white">PAUL</div>
            <div className="text-8xl font-bold text-white">POGBA</div>
          </div>
          <hr className="line" />
          <div className="flex justify-between pl-5">
            <div className="text-[#5cb770]">POSITION</div>
            <div className="text-[#5cb770]">NATIONALITY</div>
            <div className="text-[#5cb770]">CLUB</div>
          </div>
          <div className="flex justify-between pl-2">
            <img className="h-12  pr-2" src="./images/MIDFIELDER.png" alt="" />
            <img className="h-12 pl-24 " src="./images/FRANCE.png" alt="" />
            <img className="h-12 pl-16" src="./images/JUVENTUS.png" alt="" />
          </div>
          <div>
            <div className=" ">
              <div className="flex flex-col gap-2  items-start">
                <div className="text-[#5cb770] text-xl font-bold">
                  DESCRIPTION
                </div>
                <hr className="line" />
                <p className="text-white para">
                  Paul Pogba, the French midfield maestro, is a footballing
                  force to be reckoned with. At 6'3" (191 cm), his imposing
                  stature is matched only by his incredible skills on the pitch.
                  He's a true playmaker, celebrated for his ability to dissect
                  opposing defenses with pinpoint passes and set up goal-scoring
                  opportunities. Pogba's versatility shines as a box-to-box
                  midfielder, tirelessly covering ground to contribute
                  defensively while also surging forward to create or score
                  goals.
                </p>
              </div>
              <div className="flex flex-col  items-start">
                <div className="text-[#5cb770] text-xl  font-bold">
                  STATISTICS
                </div>
                <div>
                  <hr className="line" />
                </div>
                <img src="./images/FRANCE.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="./images/PogbaCard.png" alt="" />
        </div>
      </div>
    </div>
  );
}
//  dd6a00 9A7E43
export default Player;
