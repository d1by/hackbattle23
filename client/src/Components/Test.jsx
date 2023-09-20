import { useNavigate } from "react-router-dom";

function Test() {
    const navigate = useNavigate();
    function checkUser(e){
        var loggedIn = false;
        e.preventDefault();
        const user = e.target.username.value;
        const password = e.target.password.value;
        async function fetchText() {
            let response = await fetch('http://localhost:8080/127.0.0.1:5500/playerinfo');
            console.log(response.status); // 200
            console.log(response.statusText); // OK
            if (response.status === 200) {
                let data = await response.text();
                let jsonData = JSON.parse(data);
                for (let i = 0; i < jsonData.length ; i++ ){
                    if(jsonData[i].name===user){
                        if(jsonData[i].password===password){
                            loggedIn = true
                            console.log(jsonData[i]);
                            navigate("/", {state:jsonData[i]});
                        }else{
                            alert("Wrong password, try again");
                        }
                    }
                }
                if (loggedIn===false){
                    console.log("User does not exist. Redirecting to Sign up Page.");
                    navigate("/login");
                }
            }
        }
        fetchText();
    }
    
    
    return ( 
    <div className="flex justify-center pt-48">
        <form onSubmit={checkUser} className="flex flex-col items-center gap-4 border-white focus:outline-none border-solid">
            <img src="./images/Logo.png" />
            <input type="text" placeholder="Username" name="username"></input>
            <input type="password" placeholder="Password" name="password"></input>
            <button type="submit" className="bg-white hover:bg-blue-400 w-24">SUBMIT</button>
        </form>
    </div> );
}

export default Test;