"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "#Say Hello ...";
  const mail = "example@example.com";
  const [isTextFocused, setTextFocused] = useState(true);

  const handleTextareaFocus = () => {
    setTextFocused(false);
  };

  const handleTextareaBlur = () => {
    setTextFocused(true);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full bg-black"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-full lg:h-full lg:w-1/2 ml-20 w-1/2 mb-20 flex items-center justify-center text-green-400 text-2xl lg:text-4xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className=" h-fit lg:h-[80vh] lg:w-1/2 bg-white/10 rounded-lg text-white flex flex-col gap-8 justify-center p-6 border-t-[3rem] border-white/30"
          style={{ fontFamily: "Consolas, monospace" }}
        >
          <span className="flex absolute lg:mb-[39rem] mb-[36rem]  text-5xl">
            <span className="text-yellow-400">.</span>
            <span className="text-red-400">.</span>
            <span className="text-green-400">.</span>
          </span>
          <span>$ Hey Divy,</span>
          <div className="flex gap-0">
            <textarea
              rows={6}
              className="bg-black/10 border-b-2 border-b-white outline-none text-white lg:w-[30vw] w-[80vw] rounded-xl p-1"
              placeholder="type your message here..."
              name="user_message"
              style={{ resize: "none" }}
              onFocus={handleTextareaFocus}
              onBlur={handleTextareaBlur}
            />
            {isTextFocused && (
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4, repeat: 100 }}
                className="absolute ml-56"
              >
                |
              </motion.span>
            )}
          </div>

          <div>
            $ My mail address is:{" "}
            {mail.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <input
            name="user_email"
            type="text"
            className="bg-black/10 border-b-2 border-b-white outline-none text-white rounded-lg"
            style={{ width: "100%" }}
          />
          <span>$ Regards</span>
          <button className="bg-black border-green-400 border-2 rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
