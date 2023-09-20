function Test() {
    
    function checkUser(e){
        var loggedIn = false;
        e.preventDefault();
        const email = e.target.mail.value;
        const password = e.target.password.value;
        async function fetchText() {
            let response = await fetch('http://localhost:8080/127.0.0.1:5500/');
            console.log(response.status); // 200
            console.log(response.statusText); // OK
            if (response.status === 200) {
                let data = await response.text();
                let jsonData = JSON.parse(data);
                
                for (let i = 0; i < jsonData.length ; i++ ){
                    if(jsonData[i].name===email){
                        if(jsonData[i].password===password){
                            loggedIn = true
                            console.log(jsonData[i]);
                            navigate("/home", {state:jsonData[i]});
                        }else{
                            alert("Wrong password, try again");
                        }
                    }
                }
                if (loggedIn===false){
                    console.log("User does not exist. Redirecting to Sign up Page.");
                    navigate("/");
                }
            }
        }
        fetchText();
    }
    
    
    return ( <div>
        <form onSubmit={checkUser}>
            <input type="text" placeholder="Username" name="username"></input>
            <input type="password" placeholder="Password" name="password"></input>
        </form>
    </div> );
}

export default Test;