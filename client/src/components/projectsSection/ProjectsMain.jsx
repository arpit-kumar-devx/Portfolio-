import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Exam Portal",
    year: "Feb 2025 - Jun 2025",
    align: "right",
    // images are served from Vite public folder
    image: "/images/Exam Portal.png",
    link: "https://github.com/arpit-kumar-devx/ExamPortal-SpringBoot",
  },
  {
    name: "EduGate REC Mirzapur – Admission & Information Management System",
    year: "Jun 2025 – Aug 2025",
    align: "left",
    image: "/images/EduGate.png",
    link: "https://github.com/arpit-kumar-devx/SPI_Project_EduGate/tree/master",
  },
  {
    name: "TaxPal – Personal Finance & Tax Estimator",
    year: "Sep 2025 - Nov 2025",
    align: "right",
    image: "/images/Taxpal.png",
    link: "https://github.com/arpit-kumar-devx/taxpal_app",
  },
  {
  name: "TaxSphere – Smart Finance & Tax Intelligence System",
  year: "Feb 2026 - May 2026",
  align: "left",
  image: "/images/TaxSphere.png",
  link: "https://github.com/arpit-kumar-devx/TaxSphere-Smart-Finance-System",
},
   
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
