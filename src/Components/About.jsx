import Image from "next/image";
import { Team } from "./Team";
import empathy from "../assets/empathy.png";
import adaptability from "../assets/adaptability.png";
import innovation from "../assets/innovation.png";

const About = () => {
  return (
    <section className="px-6 mt-16 xl:mt-20">
      <aside>
        <h1 className="text-2xl text-center my-3 xl:text-3xl">Our Story</h1>
        <p className="text-center text-sm text-slate-600 lg:mx-28 xl:mx-72 2xl:mx-[500px] leading-relaxed">
          Sync Innovative is your comprehensive solution for tracking members
          and workers effortlessly. Say goodbye to the complexities of managing
          your congregation. Our platform streamlines these processes, providing
          you with the tools to focus on what truly matters fostering a vibrant
          and connected spiritual community.
        </p>
      </aside>

      <article className="my-3 mt-8 lg:mt-10 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 xl:mx-16 mx-auto">
        <aside className="flex flex-col justify-center items-center text-center">
          <Image src={empathy} />
          <h3 className="text-center text-xl font-bold xl:text-2xl">Empathy</h3>
          <p className="text-center pt-2 lg:mx-8 xl:mx-16 xl:text-lg">
            We value the unique needs and challenges of the communities we
            serve, whether they be religious congregations or businesses.
          </p>

        </aside>

        <aside className="my-4 md:my-0 flex flex-col justify-center items-center text-center">
          <Image src={innovation} />
          <h3 className="text-center text-xl font-bold xl:text-2xl">
            Innovation
          </h3>
          <p className="text-center pt-2 lg:mx-8 xl:mx-16 xl:text-lg">
            We encourage creative thinking, curiosity, and a proactive approach
            to identifying and implementing cutting-edge technologies.
          </p>
        </aside>

        <aside className="flex flex-col justify-center items-center text-center">
          <Image src={adaptability} />
          <h3 className="text-center text-xl font-bold xl:text-2xl">
            Adaptability
          </h3>
          <p className="text-center pt-2 lg:mx-8 xl:mx-16 xl:text-lg">
            Our solutions are designed to be flexible and customizable,
            acknowledging the distinct needs of each community.
          </p>
        </aside>
      </article>

      <Team />
    </section>
  );
};
export default About;
