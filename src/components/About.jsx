import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 text-justify">
        I am Wev Developer, studied at the University of the Aegean at the Department of Information and Communication Systems Engineering (ICSD). I am currently completing my Thesis title "Survey on web application
development methods and techniques." I ve complete my 2 month practical training at a company in the City of Kavala witch i live in and continiued working there for an additional 2 years.
My interests now include learning more about front end development, techniques and frameworks, as well git and github.
        </p>

        <br />

        <p className="text-xl text-justify">
          As a character i am friendly, love working with other people, cooperative with strong team values. In my daily life i love doing activities with friends. Some of my hobbies are fishing and sprearfishing, team sports and hiking.
        </p>
        <br />

        <p className="text-xl text-justify">
          At the moment i am actively looking for a job as a Front End Developer. You can learn more about me by checking my resume or directly contacting me at my socials or email. I will be happy to talk with you !
          </p>
      </div>
    </div>
  );
};

export default About;