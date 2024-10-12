/* eslint-disable no-unused-vars */
import React from "react";

const Education = () => {
  return (
    <section className="py-8 " id="education">
      <h2 className="text-center text-4xl font-semibold text-white tracking-tighter">
        My Education
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 p-10">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-3xl font-bold text-indigo-400">
            Bachelor of Electrical Engineering
          </h3>

          <p className="mt-4 text-base text-gray-200">
            Specialized in web development, programming languages, and database
            management. Actively involved in coding clubs and hackathons, where
            I developed several web applications using HTML, CSS, JavaScript,
            and PHP. Graduated with a high GPA.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
