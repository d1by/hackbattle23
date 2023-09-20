import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function checkUser(e) {
    var loggedIn = false;
    e.preventDefault();
    const user = e.target.username.value;
    const password = e.target.password.value;
    async function fetchText() {
      let response = await fetch(
        "http://localhost:8080/127.0.0.1:5500/playerinfo"
      );
      console.log(response.status); // 200
      console.log(response.statusText); // OK
      if (response.status === 200) {
        let data = await response.text();
        let jsonData = JSON.parse(data);
        for (let i = 0; i < jsonData.length; i++) {
          if (jsonData[i].name === user) {
            if (jsonData[i].password === password) {
              loggedIn = true;
              console.log(jsonData[i]);
              navigate("/", { state: jsonData[i] });
            } else {
              alert("Wrong password, try again");
            }
          }
        }
        if (loggedIn === false) {
          console.log("User does not exist. Redirecting to Sign up Page.");
          navigate("/login");
        }
      }
    }
    fetchText();
  }

  return (
    <div className="bg-[#262626] pb-7">
      <div className="flex gap-48 justify-center pt-16 pb-12">
        <div className="login flex flex-col pt-8 items-center gap-2 bg-transparent backdrop-blur">
          <form onSubmit={checkUser} className="flex flex-col  gap-4">
            <img src="./images/Logo.png" alt="" />
            <h1 className="text-3xl text-white ">UserName</h1>
            <input
              className="p-5 my-3 bg-transparent border-b border-white text-white text-xl  focus:outline-0 placeholder:text-white"
              type="text"
              placeholder="Enter Username"
              name="username"
            ></input>
            <h1 className="text-white text-3xl">Password</h1>
            <input
              className="p-5 my-3 bg-transparent border-b border-white text-white text-xl  focus:outline-0 placeholder:text-white"
              type="password"
              placeholder="Enter Password"
              name="password"
            ></input>
            <button className=" text-lg py-2 px-12 border-2 text-white border-white  hover:bg-white hover:text-black">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
