import { CardComponents } from "./CardComponents";
import {
  FaPaypal,
  FaPiggyBank,
  FaWhatsapp,
  FaCloud,
  FaNimblr
} from "react-icons/fa";
import attendance from "../assets/attendance.png";
import layout from "../assets/Layout.png";
import messaging from "../assets/messaging.png";
import reminder from "../assets/reminder.png";
import paymnet from "../assets/paymnet.png";
import videoImg from "../assets/video.png";
import Image from "next/image";
import WhatUsers from "./WhatUsers";
import Faqs from "./Faqs";

const HeroContent = () => {
  return (
    <section>
      <section className="mt-10 px-6 lg:px-16">
        <article className="lg:flex lg:justify-center lg:items-center lg:gap-x-3 lg:w-[95%] lg:mx-auto">
          <aside className="flex flex-col justify-left lg:w-[50%]">
            <p className="bg-[#a7a8d8cc] px-6 text-sm py-2 rounded-full w-fit text-slate-800">
              Your church's wingman for growth
            </p>
            <div className="space-y-2">
              <p className="mt-10 text-xl font-bold md:text-5xl leading-loose">
                Sync Innovative Grow Your Church 10 times Faster
              </p>
              <div className="text-slate-500 text-sm">
                <p>Welcome to Sync Innovative!</p>
                <p className="">
                  Where the heart of your church beats stronger
                </p>
              </div>
            </div>
            <button className="bg-[#0f3d9acc] w-fit px-6 mt-3 py-2 rounded-lg text-white text-sm">
              Get Started
            </button>
          </aside>

          <aside className="mt-6 lg:w-[50%]">
            <Image src={videoImg} className="w-8/12 mx-auto" alt="alt" />
          </aside>
        </article>

        <aside className="mt-8 lg:my-16 flex justify-center items-center flex-col">
          <p className="lg:text-3xl">Supported by</p>
          <div className="flex text-3xl md:text-4xl lg:text-5xl text-gray-300 mt-3 gap-x-8">
            <FaWhatsapp />
            <FaCloud />
            <FaPaypal />
            <FaPiggyBank />
            <FaNimblr />
          </div>
        </aside>

        <CardComponents
          layout={layout}
          messaging={messaging}
          attendance={attendance}
          reminder={reminder}
          paymnet={paymnet}
        />
      </section>
      <WhatUsers />
      <Faqs />
    </section>
  );
};
export default HeroContent;
