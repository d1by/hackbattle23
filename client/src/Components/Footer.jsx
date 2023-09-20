function footer() {
  return (
    <div className=" pt-12 pb-24">
      <div className="flex items-start text-white gap-44">
        <div className="py-20 px-16">
          <div className="pb-2">
            <img src="./images/Logo.png" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <div>VIT Vellore</div>
            <div>Tamil Nadu</div>
            <div>632014</div>
          </div>
        </div>
        <div className=" py-20 px-16">
          <div className="text-2xl pb-2">Site Links</div>
          <div className="flex flex-col gap-2">
            <a href="#home">Home</a>
            <a href="#teams">Teams</a>
            <a href="players">Players</a>
            <a href="#contracts">Contracts</a>
          </div>
        </div>
        <div className="py-20 px-16">
          <div>Contact Us</div>
          <a href="EvoPacts1010@gamil.com">Email</a>
          <div>+91-xxxxxxxxxx</div>
          <div></div>
        </div>
      </div>
      <div className="text-white py-5">Copyright @2023</div>
      <div className="text-white py-5">Made With 💖 by team UnEmployed</div>
    </div>
  );
}

export default footer;
