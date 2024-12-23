import React from 'react';

const EducationItem = ({ title, year, grade, institution }: {
  title: string;
  year: string;
  grade: string;
  institution: string;
}) => (
  <div className="relative pl-8 pb-8 border-l-2 border-red-400 last:pb-0">
    <div className="absolute w-4 h-4 bg-red-400 rounded-full -left-[9px] mt-1.5"></div>
    <h4 className="text-xl text-white font-medium mb-2">{title}</h4>
    <div className="flex gap-4 text-sm mb-2">
      <span className="text-red-400">{year}</span>
      <span className="text-gray-300 border-l border-gray-600 pl-4">{grade}</span>
    </div>
    <p className="text-gray-400">{institution}</p>
  </div>
);

const Education = () => {
  const educationData = [
    {
      title: "Computer Science and Engineering",
      year: "2024",
      grade: "CGPA : 8.9",
      institution: "GNANAMANI COLLEGE OF TECHNOLOGY, NAMAKKAL(Anna University)"
    },
    {
      title: "MATHS COMPUTER SCIENCE",
      year: "2020",
      grade: "Percentage: 57%",
      institution: "GOVERNMENT HIGHER SECONDARY SCHOOL, RASIPURAM"
    },
    {
      title: "State Board",
      year: "2018",
      grade: "Percentage: 65%",
      institution: "BRINDAVAN MATRIC HR SEC SCHOOL,THUTHIKULAM"
    }
  ];

  return (
    <section id="Education" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-cyan-400 font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-xl p-8 hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow duration-300">
          {educationData.map((item, index) => (
            <EducationItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;