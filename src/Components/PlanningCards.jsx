import React from "react";
export function PlanningCards({ plansOne, plansTwo }) {
  return (
    <article className="mt-24 md:grid md:grid-cols-2 md:gap-x-4 lg:w-[80%] lg:mx-auto xl:w-[50%] xl:gap-x-10 2xl:gap-x-20">
      <aside className="shadow-xl py-4 px-4 rounded-lg hover:bg-[#e9eaffcc]">
        <h1 className="text-3xl text-center py-2">Basic</h1>
        <p className="text-center text-sm">
          For growing churches who want more visibility and growth
        </p>
        <p className="text-4xl text-center py-3">₦10,000.00</p>
        <aside className="mt-8">
          {plansOne.map((plan, index) =>
            <div key={index} className="mt-2 flex items-center gap-x-3">
              <p className="text-xs bg-[#070b65cc] text-white w-fit p-1 rounded-full">
                {plan.icon}
              </p>
              {plan.info}
            </div>
          )}
          <div className="flex justify-center items-center mt-6">
            <button className="border px-20 rounded-lg text-[#070b65cc] font-semibold py-2 border-[#070b65cc]">
              Get Started
            </button>
          </div>
        </aside>
      </aside>

      <aside className="shadow-xl py-4 px-4 mt-6 md:mt-0 rounded-lg hover:bg-[#e9eaffcc]">
        <h1 className="text-3xl text-center py-2">Pro</h1>
        <p className="text-center text-sm">
          We suggest you go with this if you're serious about growing your
          church
        </p>
        <p className="text-4xl text-center py-3">₦15,000.00</p>
        <aside className="mt-8">
          {plansTwo.map((plan, index) =>
            <div key={index} className="mt-2 flex items-center gap-x-3">
              <p className="text-xs bg-[#070b65cc] text-white w-fit p-1 rounded-full">
                {plan.icon}
              </p>
              {plan.info}
            </div>
          )}
          <div className="flex justify-center items-center mt-6">
            <button className="border px-20 rounded-lg text-[#070b65cc] font-semibold py-2 border-[#070b65cc]">
              Get Started
            </button>
          </div>
        </aside>
      </aside>
    </article>
  );
}
