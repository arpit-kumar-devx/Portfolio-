import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Artificial Intelligence Trainee – ICT Academy",
    responsibilities: [
       "Completed comprehensive training in Artificial Intelligence, Generative AI, and Prompt Engineering.",
       "Gained hands-on experience with AI tools, machine learning concepts, and intelligent application development.",
        "Implemented practical AI use cases and worked on real-world problem-solving projects.",
        "Collaborated in team-based learning environments while applying AI development and innovation best practices.",
    ],

  },
  {
    job: "Full Stack Developer – Infosys Springboard",
    responsibilities: [
      "Contributed to end-to-end development of MEAN stack web applications.",
      "Built responsive and modular user interfaces using Angular.",
      "Developed secure RESTful APIs using Node.js and Express.js.",
      "Designed and optimized MongoDB schemas for efficient data handling.",
      "Integrated frontend with backend services to ensure seamless user experience.",
      "Collaborated in Agile teams and followed best development practices.",
    ],
  },
  {
    job: "Software Development Engineer Intern – Softpro India",
    responsibilities: [
      "Developed a complete MERN stack web application during summer internship.",
      "Built interactive and responsive user interfaces using React.js.",
      "Implemented backend services using Node.js and Express.js.",
      "Managed MongoDB databases including CRUD operations and query optimization.",
      "Ensured secure data flow between client and server.",
      "Worked closely with team members to deliver project milestones on time.",
    ],
  },
  {
    job: "Python Web Development Trainee – ICT Academy",
    responsibilities: [
      "Participated in an intensive Python web development training program.",
      "Learned backend fundamentals, web frameworks, and application logic.",
      "Worked on hands-on exercises and mini-projects.",
      "Collaborated with peers to apply best coding practices.",
    ],
  },
];


 

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
