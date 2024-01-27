import Hero from "./Components/Hero";
import Tabs from "./Components/Tabs";

const page = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-[50%] w-full">
      <Hero />
      <Tabs/>
      </div>
    </div>
  );
};

export default page;
