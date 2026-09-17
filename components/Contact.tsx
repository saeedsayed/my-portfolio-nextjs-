"use client";
import { ChangeEvent, SubmitEvent, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import Lottie from "lottie-react";
import message from "@/public/animation/message.json";
import messageOk from "@/public/animation/message-ok.json";
import sending from "@/public/animation/sending.json";
import rejectSend from "@/public/animation/reject-send.json";
import emailjs from "emailjs-com";
import MainBtn from "./MainBtn";

const Contact = () => {
  const [messageData, setMessageData] = useState({
    from_name: "",
    from_email: "",
    to_name: "saeed",
    message: "",
  });
  const [sendingMessage, setSendingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj = {
      from_name: messageData.from_name + " " + messageData.from_email,
      to_name: messageData.to_name,
      message: messageData.message,
    };
    setSendingMessage(true);
    emailjs
      .send("service_y78p415", "template_pqi434c", obj, "nP8P_3HBV4XJHFIq1")
      .then(
        () => {
          setSendingMessage(false);
          setSuccessMessage(true);
          setMessageData({
            from_name: "",
            from_email: "",
            message: "",
            to_name: "Saeed",
          });
        },
        () => {
          setSendingMessage(false);
          setErrorMessage(true);
        },
      );
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" aria-label="Contact Saeed">
      {/* ============
      section title 👇
      ================ */}
      <div className="mb-8">
        <SectionTitle>
          <MdOutlineMailOutline /> contact Me
        </SectionTitle>
        <p className="text-font-sub-color capitalize">
          {"Let's"} connect and explore opportunities to collaborate on exciting
          projects
        </p>
      </div>
      {/* ==============
      contact form 👇
      ================== */}
      <div className="flex items-center flex-col sm:flex-row">
        <div className="w-full sm:w-8/12 order-2 sm:order-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:items-start gap-4"
          >
            {/* name input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label
                htmlFor="name"
                className="text-font-sub-color w-28 cursor-target"
              >
                Your Name:
              </label>
              <input
                type="text"
                required
                name="from_name"
                id="name"
                value={messageData.from_name}
                onChange={handleInputChange}
                className="border border-border-color w-full sm:w-60 bg-bg-nav focus:border-hover-color px-4 py-1 rounded-md cursor-target"
              />
            </div>
            {/* email input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label
                htmlFor="email"
                className="text-font-sub-color w-28 cursor-target"
              >
                Your Email:
              </label>
              <input
                type="email"
                required
                id="email"
                name="from_email"
                value={messageData.from_email}
                onChange={handleInputChange}
                className="border border-border-color w-full sm:w-60 bg-bg-nav focus:border-hover-color px-4 py-1 rounded-md cursor-target"
              />
            </div>
            {/* message input */}
            <div className="flex flex-col self-stretch sm:flex-row items-start sm:items-center gap-4">
              <label
                htmlFor="message"
                className="text-font-sub-color w-28 cursor-target"
              >
                Your Message:
              </label>
              <textarea
                required
                name="message"
                id="message"
                value={messageData.message}
                onChange={handleInputChange}
                className="border tracking-wider border-border-color min-h-44 max-h-96 w-full sm:w-8/12 bg-bg-nav 
                focus:border-hover-color px-4 py-1 rounded-md cursor-target"
              />
            </div>
            {/* submit button */}
            <div className="flex min-w-32 md:items-center flex-col md:flex-row gap-4">
              <div className="w-32">
                <MainBtn>send</MainBtn>
              </div>
              {/* =============
              sending message 👇
              ================= */}
              {sendingMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-10 lg:w-12.5">
                    <Lottie animationData={sending} />
                  </span>{" "}
                  <span className="text-font-sub-color">Sending...</span>
                </p>
              )}
              {successMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-10 lg:w-12.5">
                    <Lottie loop={false} animationData={messageOk} />
                  </span>{" "}
                  your message has been sent successfully
                </p>
              )}
              {errorMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-10 lg:w-12.5">
                    <Lottie animationData={rejectSend} />
                  </span>
                  <span>{errorMessage} rejected</span>
                </p>
              )}
            </div>
          </form>
        </div>
        {/* ===============
        right section 👇
        =================== */}
        <div className="flex-1 order-1 sm:order-2">
          <Lottie animationData={message} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
