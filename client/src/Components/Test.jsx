import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    const weekwage = e.target.weekwage.value;
    const date = e.target.duration.value;
    const legalities = e.target.legalities.value;
    //will also have to send team name and player name

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weekwage: weekwage,
        date: date,
        legalities: legalities,
      }),
    };
    navigate("/");
    try {
      fetch("http://localhost:8080/127.0.0.1:5500/contracts", options).then(
        (res) => {
          console.log(res);
          if (res.status === 200) {
            console.log(res.status);
            console.log("Info Sent successfully");
          } else {
            console.log("Some error occured");
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" pb-7 ">
      <div className="flex justify-center pt-3">
        <h1 className="text-4xl  text-[#0C356A] underline">Contract</h1>
      </div>
      <div className="flex gap-48 justify-center pt-16 pb-12">
        <div className="login1 flex flex-col pt-8 items-center  bg-transparent backdrop-blur">
          <form className="flex flex-col  gap-12" onSubmit={handleSubmit}>
            <input
              type="number"
              name="weekwage"
              placeholder="Wage in $"
              className="  border-b border-[#0C356A] text-[#0C356A] text-xl  focus:outline-0 placeholder:text-[#0C356A] "
            ></input>
            <h1 className="text-2xl text-[#0C356A]">Starting Date</h1>
            <input
              className="  border-b border-[#0C356A] text-[#0C356A] text-xl  focus:outline-0 placeholder:text-[#0C356A] "
              type="date"
              name="duration"
              placeholder="From Date"
            ></input>
            <h1 className="text-2xl text-[#0C356A]">Expiry Date</h1>
            <input
              className="  border-b border-[#0C356A] text-[#0C356A] text-xl  focus:outline-0 placeholder:text-[#0C356A] "
              type="date"
              name="duration"
              placeholder="Till Date"
            ></input>
            <textarea
              className=" focus:outline-[#0C356A] border-[#0C356A] text-[#0C356A] text-xl  focus:border-[#0C356A] placeholder:text-[#0C356A] "
              name="legalities"
              placeholder="Clauses"
            ></textarea>
            <button
              type="submit"
              className="text-lg  px-12 border-2 text-black border-[#0C356A]  hover:bg-[#0C356A] hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
