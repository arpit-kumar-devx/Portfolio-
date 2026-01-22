import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Arpit Kumar, a passionate Full Stack Developer with hands-on experience in building modern, scalable web applications.
I specialize in MERN stack development and have a strong foundation in Java and Spring Boot for backend systems. My core expertise lies in developing secure RESTful APIs, designing efficient database schemas, and delivering responsive user interfaces.

I have worked on real-world projects during my internships at Infosys Springboard and Softpro India, where I contributed to both frontend and backend development using React, Angular, Node.js, Express.js, and MongoDB. I enjoy translating business requirements into clean, functional, and user-friendly applications.

While I am comfortable working across the full stack, I have a keen interest in backend logic, API integration, authentication systems, and data management. I am familiar with modern development tools like Git, Postman, AWS, and Netlify, and I value clean code, teamwork, and continuous learning. I enjoy collaborating with others to build impactful and reliable software solutions.
      </p>
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
