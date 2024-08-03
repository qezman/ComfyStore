import { SiFacebook, SiGoogle, SiTwitter } from "react-icons/si";
import Que from "../assets/logo.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="mt-24 bg-[#070b65cc] text-white p-3 md:px-12 md:py-8 lg:p-12 md:text-lg">
      <div className="container mx-auto w-full">
        <div className="grid gap-8 lg:grid-cols-4 text-center md:text-left">
          <aside className="flex flex-col items-center md:items-start lg:col-span-1">
            <Image src={Que} alt="Que" width={50} height={50} />
            <p className="mt-3">
              Welcome to Sync Innovative! Where the heart of your church beats stronger.
            </p>
          </aside>

          <article className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-medium md:text-lg lg:col-span-3">
            <aside className="space-y-1">
              <p className="text-lg cursor-pointer">Company</p>
              <p className="pt-2 cursor-pointer">About Us</p>
              <p className="cursor-pointer">Solutions</p>
              <p className="cursor-pointer">Pricing</p>
              <p className="cursor-pointer">Meet the Team</p>
            </aside>

            <aside className="space-y-1">
              <p className="text-lg">Resources</p>
              <p className="pt-2">Privacy</p>
              <p>Contacts</p>
              <p>FAQs</p>
            </aside>

            <aside className="space-y-1">
              <p className="text-lg">Stay tuned</p>
              <div className="flex justify-center md:justify-start items-center gap-x-3">
                <SiTwitter />
                <SiFacebook />
                <SiGoogle />
              </div>
            </aside>
          </article>
        </div>
      </div>

      <section>
        {/* <p>Qezman {new Date.get}</p> */}
      </section>
    </section>
  );
};

export default Footer;
