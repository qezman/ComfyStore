import React, { useState } from "react";
import Qez from "../assets/logo.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const SignUp = () => {
  const [username, setUsername] = useState("defaultUsername");
  const [password, setPassword] = useState("defaultPassword");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    router.push("/login");
    // const res = await fetch("/api/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ username, password })
    // });

    // const data = await res.json();

    // if (res.status === 200) {
    //   router.push("/");
    // } else {
    //   setError(data.message || "An error occurred during sign-up.");
    // }
  };

  return (
    <section className="gradient-form h-full dark:bg-neutral-700 flex items-center justify-center">
      <div className="container p-10">
        <div className="flex flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-2xl">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-full">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <Image
                        className="mx-auto"
                        src={Qez}
                        alt="logo"
                        width={60}
                        height={60}
                      />
                      <h4 className="mb-12 mt-5 pb-1 text-xl font-semibold text-[#070b65cc]">
                        Qezman Team
                      </h4>
                    </div>
                    {error && <p className="mb-4 text-red-500">{error}</p>}
                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 font-semibold text-[#030426cc]">
                        Please register an account
                      </p>
                      {/* Username input */}
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-b bg-transparent px-0 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute left-1 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Username
                        </label>
                      </div>

                      {/* Password input */}
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init
                      >
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute left-1 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>

                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-6 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="submit"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                          style={{
                            background:
                              "linear-gradient(to right, #070b65cc, #070b65cc, #070b65cc, #070b65cc)",
                          }}
                        >
                          Sign up
                        </button>

                        {/* Forgot password link */}
                        <a href="#!">Terms and conditions</a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Have an account?</p>
                        <Link href="/login">
                          <button
                            type="button"
                            className="inline-block text-[#070b65cc] font-semibold border-[#070b65cc] rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Login
                          </button>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #070b65cc, #070b65cc, #070b65cc, #070b65cc)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
