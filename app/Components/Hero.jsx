import Image from "next/image";
import Button from "./Button";
import Bio from "./Bio";

const Hero = () => {
  return (
    <>
      <div className="lg:py-14 py-5 bg-slate-400 relative">
       <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

    <dotlottie-player src="https://lottie.host/478f21ac-fe5a-4b94-a844-b32e8b5ebdd1/tttW9rx6lU.json" background="transparent" speed="1" 
          style={{ width: "100%", height: "15vh" }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="flex justify-between items-start mx-5 lg:mx-0">
      <div className="transform -translate-y-1/2 lg:translate-x-2/4 lg:w-36 lg:h-36 w-28 h-28 overflow-hidden rounded-full border-4 border-blue-100 relative ">
        <Image
          src={"https://i.imgur.com/Yv6tpux.jpg"}
          alt="Profile"
          width={140}
          height={140}
          className="w-full h-full object-cover"
          />
      </div>
      <Button text="Download CV" variant="primary"  className={"lg:mt-4 lg:mr-6 mt-2"}/>
      </div>
      <div className="mt-[-50px] z-10 mx-5 lg:mx-0">
        <Bio/>
      </div>
    </>
  );
};

export default Hero;
