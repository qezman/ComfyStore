const About = ({ toggleBackground }) => {
  return (
    <section className="mx-12 md:mx-16 lg:mx-32 xl:mx-56 2xl:mx-72 mt-20 flex flex-col justify-center items-center">
      <h1 className="text-[40px] text-gray-400 lg:text-[56px] font-bold">
        We love{" "}
        <span
          className={`px-4 py-2 rounded-2xl ${
            toggleBackground
              ? "bg-blue-500 text-gray-100"
              : "bg-pink-400 text-gray-200"
          }`}
        >
          comfy
        </span>
      </h1>
      <p className="mt-4 md:mt-6 text-[17px] md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </section>
  );
};

export default About;
