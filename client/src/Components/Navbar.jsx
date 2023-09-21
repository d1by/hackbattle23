function Navbar() {
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("Please install metamask");
    }
  };
  return (
    <div className="">
      <nav className="border-gray-200 p-5 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img
            src="./images/Logo.png"
            className="h-12 mr-3"
            alt="Flowbite Logo"
          />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0  border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <a
                  href="#home"
                  className="block py-2 pl-3 pr-4 text-xl text-white-500 duration-500 hover:text-2xl  md:bg-transparent md:text-[#FF7A00] md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="block py-2 pl-3 pr-4 text-xl  text-white hover:text-2xl duration-500  md:hover:bg-transparent md:border-0 md:hover:text-[#FF7A00] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#players"
                  className="block py-2 pl-3 pr-4 text-xl text-white hover:text-2xl duration-500  md:hover:bg-transparent md:border-0 md:hover:text-[#FF7A00] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Players
                </a>
              </li>
              <li>
                <a
                  href="./Contract"
                  className="block py-2 pl-3 pr-4 text-xl text-white hover:text-2xl duration-500  md:hover:bg-transparent md:border-0 md:hover:text-[#FF7A00] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contracts
                </a>
              </li>
              <li>
                <div className="px-5 ">
                  <button
                    onClick={connectWallet}
                    className=" py-2 bg-[#FF7A00] text-white px-4 rounded-full "
                  >
                    <div className="flex justify-content">
                      <img src="./images/Meta.png" alt="" />
                      <span className="px-5">
                        Connect
                        <br />
                        Wallet
                      </span>
                    </div>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
