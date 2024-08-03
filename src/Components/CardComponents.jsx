import React from "react";
import Image from "next/image";
import computer from "../assets/computer.jpg";
import hands from "../assets/hands.png";
import pastor from "../assets/pastor.png";
export function CardComponents({
  layout,
  messaging,
  attendance,
  reminder,
  paymnet
}) {
  return (
    <article>
      <section className="my-24 lg:grid lg:grid-cols-2 lg:justify-items-center lg:w-[80%] lg:mx-auto">
        <aside className="hidden lg:flex gap-x-4">
          <div className="space-y-2">
            <Image
              src={computer}
              width={250}
              alt="alt"
              className="rounded-lg h-56"
            />
            <Image
              src={hands}
              alt="alt"
              width={250}
              className="rounded-lg h-56"
            />
          </div>
          <Image src={pastor} alt="alt" />
        </aside>
        <aside className="mt-10 lg:px-16">
          <h1 className="text-3xl">Who we are</h1>
          <p className="mt-2 text-slate-600 leading-loose">
            Sync Innovative is your comprehensive solution for tracking members
            and workers effortlessly. Say goodbye to the complexities of
            managing your congregation. Our platform streamlines these
            processes, providing you with the tools to focus on what truly
            matters fostering a vibrant and connected spiritual community.
          </p>
        </aside>
      </section>

      <aside className="mt-8 text-center">
        <h1 className="text-3xl">Our Solutions</h1>
        <p className="mt-2 text-slate-600 leading-relaxed">
          Join a thriving community of churches seeking to establish an active
          online presence.
        </p>
      </aside>

      <aside className="mt-8 md:flex justify-center items-center md:mx-8 md:gap-x-3 lg:w-[60%] lg:mx-auto lg:gap-x-5">
        <Image
          src={layout}
          alt="layout"
          className="w-11/12 mx-auto mt-3 md:w-10/12 lg:w-11/12"
          width={200}
          height={200}
        />
        <div className="">  
          <h3 className="text-sm text-blue-500 font-bold">Website builder</h3>
          <h1 className="text-2xl font-semibold pt-2">Website builder</h1>
          <p className="mt-2 text-slate-600 leading-loose">
            We empower you to create your customized online presence by creating
            your own website, showcasing your Identity, events, and services
            with no technical expertise needed.
          </p>
        </div>
      </aside>

      <aside className="mt-8 md:flex justify-center items-center md:mx-8 md:gap-x-3 lg:w-[60%] lg:mx-auto lg:gap-x-5">
        <div>
          <h3 className="text-sm text-blue-500 font-bold">Messaging</h3>
          <h1 className="text-2xl font-semibold pt-2">Messaging</h1>
          <p className="mt-2 text-slate-600 leading-loose">
            Send direct messages to your church members in just a few clicks
            with Sync Innovative , where distance is no longer a creep, feel the
            power behind every message.
          </p>
        </div>
        <Image
          src={messaging}
          alt="messaging"
          className="w-11/12 mx-auto mt-3 md:w-10/12 lg:w-11/12"
          width={200}
          height={200}
        />
      </aside>

      <aside className="mt-8 md:flex justify-center items-center md:mx-8 md:gap-x-3 lg:w-[60%] lg:mx-auto lg:gap-x-5">
        <Image
          src={attendance}
          alt="attendance"
          className="w-11/12 mx-auto mt-3 md:w-10/12"
          width={200}
          height={200}
        />
        <div>
          <h3 className="text-sm text-blue-500 font-bold">
            Attendance tracking
          </h3>
          <h1 className="text-2xl font-semibold pt-2">
            Effortlessly capture and record attendance
          </h1>
          <p className="mt-2 text-slate-600 leading-loose">
            We empower you to create your customized online presence by creating
            your own website, showcasing your Identity, events, and services
            with no technical expertise needed.We help you keep tab on who
            attends your services and events effortlessly. Because in the story
            of your church every member is part of the narrative.
          </p>
        </div>
      </aside>

      <aside className="mt-8 md:flex justify-center items-center md:mx-8 md:gap-x-3 lg:w-[60%] lg:mx-auto lg:gap-x-5">
        <div>
          <h3 className="text-sm text-blue-500 font-bold">
            Automatic reminder
          </h3>
          <h1 className="text-2xl font-semibold pt-2">
            Automatic reminders for all your events
          </h1>
          <p className="mt-2 text-slate-600 leading-loose">
            Keep everyone on track by sending timely reminders and alerts for
            events and important dates, ensuring that no one misses out. No more
            overlooked events or missed gathering.
          </p>
        </div>
        <Image
          src={reminder}
          alt="reminder"
          className="w-11/12 mx-auto mt-3 md:w-10/12"
          width={200}
          height={200}
        />
      </aside>

      <aside className="mt-8 md:flex justify-center items-center md:mx-8 md:gap-x-3 lg:w-[60%] lg:mx-auto lg:gap-x-5">
        <Image
          src={paymnet}
          alt="paymnet"
          className="w-11/12 mx-auto mt-3 md:w-10/12"
          width={200}
          height={200}
        />
        <div>
          <h3 className="text-sm text-blue-500 font-bold">
            Streamlined payments
          </h3>
          <h1 className="text-2xl font-semibold pt-2">
            Send and collect payments from all your members
          </h1>
          <p className="mt-2 text-slate-600 leading-loose">
            We ensure a hassle free financial experience for churches, allowing
            you to easily manage and receive all types of payments in one
            account with a clearly sorted and organized financial overview..
          </p>
        </div>
      </aside>
    </article>
  );
}
