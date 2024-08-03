import { PlanningCards } from "./PlanningCards";
import { FaCheck, FaMarker, FaTicketAlt } from "react-icons/fa";
import PricingFaqs from "./PricingFaqs";

const plansOne = [
  { info: "Communication via text messages.", icon: <FaCheck /> },
  { info: "Membership Managament.", icon: <FaCheck /> },
  { info: "Receive Payment", icon: <FaCheck /> },
  { info: "Automated Birthday Messages", icon: <FaCheck /> },
  { info: "Automated New Month Messages", icon: <FaCheck /> },
  { info: "Automated Reminders to first timers", icon: <FaCheck /> }
];

const plansTwo = [
  { info: "Communication via text messages.", icon: <FaCheck /> },
  { info: "Membership Managament.", icon: <FaCheck /> },
  { info: "Receive Payment", icon: <FaCheck /> },
  { info: "Automated Birthday Messages", icon: <FaCheck /> },
  { info: "Automated New Month Messages", icon: <FaCheck /> },
  { info: "Automated Reminders to first timers", icon: <FaCheck /> },
  { info: "Website Builder with free domain", icon: <FaCheck /> },
  { info: "Adverts Monetization", icon: <FaCheck /> }
];

const Pricing = () => {
  return (
    <section className="mt-6 mx-4">
      <aside className="text-center">
        <h1 className="text-2xl md:text-3xl font-medium">
          Choose the plan that's right for your church
        </h1>
        <p className="mt-2 text-slate-600">
          Navigate through our thoughtfully crafted pricing tiers, tailored to
          meet the needs of any church.
        </p>
      </aside>
      <aside className="flex justify-center gap-x-3 mt-8">
        <button className="bg-[#070b65cc] text-white px-6 shadow-xl md:text-lg py-1 rounded-lg">
          Bill Monthly
        </button>
        <button className="bg-[#070b65cc] text-white px-6 shadow-xl md:text-lg py-1 rounded-lg">
          Bill Yearly
        </button>
      </aside>

      <PlanningCards plansOne={plansOne} plansTwo={plansTwo} /
      >
      <PricingFaqs/>
    </section>
  );
};
export default Pricing;
