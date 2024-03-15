import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-left items-left"> {/* Adjusted flexbox properties */}
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-xl text-justify mb-10"> {/* Added spacing */} {/* Adjusted class name */}
          <p>
            I am a Web Developer, studied at the University of the Aegean at the Department of Information and Communication Systems Engineering (ICSD). I am currently completing my Thesis title "Survey on web application development methods and techniques." I've completed my 2-month practical training at a company in the City of Kavala which I live in and continued working there for an additional 2 years.
            My interests now include learning more about front-end development, techniques and frameworks, as well as Git and GitHub.
          </p>

          <br />

          <p>
            As a character, I am friendly, love working with other people, cooperative with strong team values. In my daily life, I love doing activities with friends. Some of my hobbies are fishing and spearfishing, team sports, and hiking.
          </p>

          <br />

          <p>
            At the moment, I am actively looking for a job as a Front-End Developer. You can learn more about me by checking my resume or directly contacting me at my socials or email. I will be happy to talk with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
