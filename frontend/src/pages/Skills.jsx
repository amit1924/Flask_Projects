import React from "react";
import { SKILLS } from "../pages/constants";

const Skills = () => {
  return (
    <div className="container mx-auto my-20" id="skills">
      <h2 className="text-center text-5xl font-bold mb-10">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 text-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 gap-5"
          >
            <div className="flex items-center space-x-4">
              {skill.icon}
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
            <span className="text-gray-400">{skill.experience}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
