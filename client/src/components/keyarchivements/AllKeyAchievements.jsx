import SingleKeyAchievement from "./SingleKeyAchievement";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AllKeyAchievements = () => {
  const achievements = [
  {
    id: 1,
    title: "MEAN/MERN Stack Mastery",
    description: "Built secure and scalable web applications using MEAN and MERN technologies while improving performance and development workflows.",
    icon: "🚀",
  },
  {
    id: 2,
    title: "Artificial Intelligence Excellence",
    description: "Achieved A+ grade in Artificial Intelligence training, gaining expertise in Generative AI, Prompt Engineering, and innovation.",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Infosys Springboard Internship",
    description: "Developed REST APIs, optimized MongoDB databases, and enhanced backend services through industry-focused full-stack projects.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "A+ Graded EduGate Project",
    description: "Successfully delivered an A+ graded MERN project with admission management, dashboards, notifications, and workflow automation.",
    icon: "🎓",
  },
  {
    id: 5,
    title: "TaxSphere FinTech Platform",
    description: "Designed and developed a finance platform featuring tax estimation, budgeting, analytics, reporting, and cloud deployment.",
    icon: "💰",
  },
  {
    id: 6,
    title: "Exam Portal Development",
    description: "Created a secure online examination platform with authentication, scheduling, result automation, and responsive user interfaces.",
    icon: "📝",
  },
  {
    id: 7,
    title: "Vice President – Student Council",
    description: "Led student initiatives, coordinated university events, and promoted collaboration through effective leadership and communication.",
    icon: "🏆",
  },
  {
    id: 8,
    title: "IEEE Web Master",
    description: "Managed website maintenance, content publishing, and digital engagement while strengthening the IEEE student community presence.",
    icon: "🌐",
  },
  {
    id: 9,
    title: "Cloud & Deployment Expertise",
    description: "Deployed scalable applications using cloud platforms, ensuring reliability, accessibility, performance, and production readiness.",
    icon: "☁️",
  },
  {
    id: 10,
    title: "AI & Prompt Engineering",
    description: "Applied Generative AI tools and prompt engineering techniques to improve productivity, automation, and software development.",
    icon: "✨",
  },
  {
    id: 11,
    title: "Industry Certifications",
    description: "Earned multiple certifications in Artificial Intelligence, Cyber Security, Angular Development, and modern web technologies.",
    icon: "📜",
  },
  {
    id: 12,
    title: "Agile Team Collaboration",
    description: "Collaborated within Agile teams to enhance code quality, user experience, project delivery, and development efficiency.",
    icon: "🤝",
  },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-20">
      {achievements.map((achievement, index) => (
        <motion.div
          key={achievement.id}
          className="h-full"
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
