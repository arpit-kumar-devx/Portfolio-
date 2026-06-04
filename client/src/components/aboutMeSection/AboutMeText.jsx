import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <div className="space-y-5 text-lightGrey text-base leading-relaxed text-justify">
        <p>
          I’m Arpit Kumar, a passionate Full-Stack Developer and AI Enthusiast with hands-on experience in designing and developing scalable, secure, and user-centric web applications. I specialize in MERN and MEAN stack development, with strong expertise in Java, Spring Boot, RESTful APIs, database design, and cloud-based deployment solutions.
        </p>
        <p>
          Through internships at Infosys Springboard and Softpro India, I have contributed to real-world software projects, working across both frontend and backend technologies including React.js, Angular, Node.js, Express.js, MongoDB, and Spring Boot. My experience includes building responsive user interfaces, developing secure authentication systems, optimizing databases, and creating production-ready applications.
        </p>
        <p>
          Beyond web development, I have a strong interest in Artificial Intelligence, Generative AI, and Prompt Engineering. I have completed professional AI training programs and enjoy exploring innovative technologies that solve real-world problems. My notable projects include TaxSphere, a Smart Finance & Tax Intelligence Platform, EduGate Admission Management System, and a Full-Stack Exam Portal.
        </p>
        <p>
          I am also actively involved in leadership and technical communities, having served as Vice President of the Student Council and Web Master of the IEEE Student Branch. These roles strengthened my communication, teamwork, and project management skills.
        </p>
        <p>
          Driven by continuous learning and innovation, I aim to build impactful digital solutions that combine modern software engineering practices with emerging AI technologies.
        </p>
      </div>

      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
