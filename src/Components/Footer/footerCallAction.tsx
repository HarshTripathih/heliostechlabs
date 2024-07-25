import React from "react";
import rocket from "../../assets/rocket.png";

const FooterCallAction: React.FC = () => {
  return (
    <div className="rs-call-action bg-sky-300 py-20 mt-6 md:py-16">
      <div className="container mx-auto flex justify-center">
        <div className="flex flex-col items-center text-center bg-sky-200 rounded-full p-10 shadow-lg">
          <div className="mb-8">
            <img src={rocket} alt="Rocket" className="w-40 h-40" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Let’s Start a Cool Project With{" "}
            <span className="text-orange-600">Helios</span>
          </h2>
          <div className="mt-10">
            <a
              className="readon started get-ready2 bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-indigo-500 transition duration-300"
              href="contact-us"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCallAction;
