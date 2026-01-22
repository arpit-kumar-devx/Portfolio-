import SingleKeyAchievement from "./SingleKeyAchievement";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AllKeyAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: "MEAN/MERN Stack Mastery",
      description: "Successfully built secure, scalable, and dynamic applications using the MEAN stack, culminating in practical improvements to team workflows",
      icon: "🚀",
    },
    {
      id: 2,
      title: "A+ Graded EduGate Project",
      description: "Delivered A+ graded MERN Stack project (EduGate) during internship, contributing core modules and ensuring timely, high-quality delivery",
      icon: "🎓",
    },
    {
      id: 3,
      title: "Infosys Springboard Internship",
      description: "Developed secure REST APIs, optimized MongoDB schemas, and enhanced backend performance during Infosys Springboard internship",
      icon: "⚙️",
    },
    {
      id: 4,
      title: "Exam Portal Development",
      description: "Created a full-featured Exam Portal using Spring Boot and AngularJS with automated result processing and secure authentication",
      icon: "📝",
    },
    {
      id: 5,
      title: "Technical Secretary",
      description: "Served as Technical Secretary in Student Council, managing technical events, handling development tasks, and supporting campus initiatives",
      icon: "👨‍💼",
    },
    {
      id: 6,
      title: "IEEE Web Master",
      description: "Worked as Web Master – IEEE Student Branch, managing website maintenance, content updates, and improving digital presence for the student community",
      icon: "🌐",
    },
    {
      id: 7,
      title: "IIC Innovation Council",
      description: "Active Member of IIC (Institution's Innovation Council), participating in innovation programs, idea presentation sessions, and project development",
      icon: "💡",
    },
    {
      id: 8,
      title: "Agile Collaboration",
      description: "Collaborated in Agile environments with cross-functional teams, contributing to UI/UX improvement and code quality enhancement through peer reviews",
      icon: "🤝",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-20">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          variants={fadeIn("up", index * 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SingleKeyAchievement achievement={achievement} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllKeyAchievements;
