import Button from "./Button";


const ContactForm = () => {
  return (
    <div className="lg:py-10 pb-12 w-5/6">
      <h2 className="text-3xl font-bold mb-3">Contact Me</h2>
      <p className="text-sm text-gray-700 mb-6">
        I am open to frelancing gigs or full-time opportunities. Feel free to
        reach out to me.
      </p>
      <form form name="contact" method="POST" data-netlify="true">
        <div className="mb-10 w-full">
          <label htmlFor="name" className="block mb-2 text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          />
        </div>
        <div className="mb-10">
          <label htmlFor="email" className="block mb-2 text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          />
        </div>
        <div className="mb-10">
          <label htmlFor="message" className="block mb-2 text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border-b border-pink-600 focus:border-slate-500 outline-none w-full bg-inherit"
            placeholder=" "
          ></textarea>
        </div>
      </form>
      <Button
        text="S E N D"
        variant="primary"
        className={"lg:mt-4 lg:mr-6 mt-2"}
      />
    </div>
  );
};
export default ContactForm;
