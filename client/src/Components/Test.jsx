import { useNavigate } from "react-router-dom";

function Test() {
    const navigate = useNavigate();

    function handleSubmit(e){
        const weekwage = e.target.weekwage.value;
        const date = e.target.duration.value;
        const legalities = e.target.legalities.value;
        //will also have to send team name and player name

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "weekwage": weekwage,
                "date": date,
                "legalities": legalities
            })
        };
        navigate("/");
        try{
            fetch('http://localhost:8080/127.0.0.1:5500/contracts', options).then((res)=>{
                console.log(res);
                if (res.status === 200) {
                    console.log(res.status);
                    console.log("Info Sent successfully");
                } else {
                    console.log("Some error occured");
                }
            })
        } catch (err) {
            console.log(err);
        }

    }

    return ( 
        <div>
            <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
                <input type="number" name="weekwage" placeholder="Weekly Wage"></input>
                <input type="date" name="duration" placeholder="Till Date"></input>
                <textarea name="legalities" placeholder="Legalities"></textarea>
                <button type="submit" className="bg-white text-black hover:bg-black hover:text-white w-32">Submit</button>
            </form>
        </div>
     );
}

export default Test;