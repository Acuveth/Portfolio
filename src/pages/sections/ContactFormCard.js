import React from "react";

const ContactFormCard = ({
  selectedColor,
  buttonTextColor,
  darkenColor,
  formRef,
  sendEmail,
  isLoaded,
}) => {
  return (
    <div
      className={
        isLoaded
          ? "fade-in-up  flex flex-col p-4 border-2 border-white w-full h-full"
          : "flex flex-col p-4 border-2 border-white w-full h-full"
      }
      style={{
        borderColor: "white",
        transition: "border-color 0.1s ease",
        animationDelay: "0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = selectedColor)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
    >
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 flex-grow w-full h-full"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="bg-gray-800 border-2 border-gray-600 p-2 text-white w-full text-sm lg:text-base"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="bg-gray-800 border-2 border-gray-600 p-2 text-white w-full text-sm lg:text-base"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="bg-gray-800 border-2 border-gray-600 p-2 text-white w-full resize-none h-[50%] flex-grow text-sm lg:text-base"
          required
        ></textarea>

        <button
          type="submit"
          className={`px-4 py-2 flex items-center justify-center ${buttonTextColor} w-full`}
          style={{ backgroundColor: selectedColor }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = darkenColor(
              selectedColor,
              0.2
            ))
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = selectedColor)
          }
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactFormCard;
