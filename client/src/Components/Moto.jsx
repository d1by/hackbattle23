function Moto() {
  return (
    <div className="bg-[#262626]">
      <div className="flex">
        <img src="./images/moto-bg.png" alt=""></img>
        <div className="flex flex-col text-white text-left p-12 gap-5 justify-center">
          <p className="moto-font-one">Our Philosophy</p>
          <p className="moto-font-two">WHAT WE DO</p>
          <p className="moto-font-one">
            We run a contract enforcement system that leverages blockchain
            technology, ensuring impartial and timely adherence to contract
            terms by both parties. We also integrate machine learning algorithms
            to asses and verify the fairness of each clauses to benefit both
            parties. To ensure losses by either party implicated in
            breaches of contract.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Moto;
