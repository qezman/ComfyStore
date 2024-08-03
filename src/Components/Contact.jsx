import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaFile,
  FaFolder,
  FaInstagram,
  FaPhone,
  FaTwitter
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (res.status === 200) {
      setResponseMessage("Email sent successfully");
    } else {
      setResponseMessage("Error sending email");
    }
  };

  return (
    <section className="mt-6 mx-4">
      <aside className="text-center">
        <h1 className="text-2xl md:text-3xl font-medium">
          Get in touch with us
        </h1>
        <p className="mt-2 text-slate-600">
          Navigate through our thoughtfully crafted pricing tiers, tailored to
          meet the needs of any church.
        </p>
      </aside>

      <article className="mt-8 lg:grid lg:grid-cols-2 lg:w-[80%] lg:mx-auto lg:gap-x-4 xl:w-[75%] xl:gap-x-20">
        <aside className="">
          <article className="text-center md:text-left">
            <h2 className="text-2xl font-medium">Drop us a message</h2>
            <p className="text-sm pt-2 text-center text-slate-600 md:text-left">
              We value your input and inquiries, and our dedicated team at Sync
              Innovative is here to assist you.
            </p>
          </article>

          <form onSubmit={handleChange} className="space-y-3 mt-4">
            <div>
              <p>Name</p>
              <input
                className="border w-full mt-1 p-2 rounded-lg outline-none"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p>Email</p>
              <input
                className="border w-full mt-1 p-2 rounded-lg outline-none"
                placeholder="Your email"
                name="email"
                value={formData.value}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <p>Message</p>
              <textarea
                className="border mt-1 p-2 w-full rounded-lg outline-none"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="bg-[#070b65cc] text-white px-6 py-1 rounded-lg">
              Submit
            </button>
          </form>
          {responseMessage &&
            <p className="text-center mt-4 text-green-500">
              {responseMessage}
            </p>}
        </aside>

        <aside className="mt-10 lg:mt-0">
          <h2 className="text-center text-2xl md:text-left">
            Or call us directly
          </h2>
          <p className="text-sm pt-2 text-center text-slate-600 md:text-left">
            We appreciate each customer, and we are proud that 60% of clients
            come back to work with us again.
          </p>

          <p className="flex items-center mt-6 gap-x-2 space-y-2 text-[#070b65cc]">
            <FaPhone />
            <span>+234 812 2142 257</span>
          </p>
          <p className="flex items-center gap-x-2 space-y-2 text-[#070b65cc]">
            <FaEnvelope />
            <span>info@example.com</span>
          </p>

          <h1 className="text-xl mt-10">We are on Socials</h1>
          <div className="space-y-2 mt-3">
            <p className="flex items-center gap-x-2 text-[#070b65cc]">
              <FaFacebook />
              <span>Facebook</span>
            </p>

            <p className="flex items-center gap-x-2 text-[#070b65cc]">
              <FaInstagram />
              <span>Instagram</span>
            </p>

            <p className="flex items-center gap-x-2 text-[#070b65cc]">
              <FaTwitter />
              <span>Twitter</span>
            </p>
          </div>
        </aside>
      </article>
    </section>
  );
};
export default Contact;
