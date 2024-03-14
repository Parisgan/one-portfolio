import React from "react";
import HeroImage from "../assets/heroImage1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I am a 
          <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    ' Web Developer',
    1000
  ]}
  speed={150}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
          </h2>
          <p className="text-white py-4 max-w-md text-justify">
            I have 2 years of experience in the field and constantly striving to learn more.
            Currently, I am in the process of expanding my knowledge on JavaScript, the React framework, Tailwind css and more, so i can be an even better Web Developer.
            Feel free to explore my website and contact me!
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img 
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full px-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;