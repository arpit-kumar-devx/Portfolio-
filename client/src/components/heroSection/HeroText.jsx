import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-scroll";
import resumePdf from "../../assets/Arpit_Kumar_Resume_.pdf";

const HeroText = () => {
  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/arpit-kumar-devx", label: "GitHub" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/arpitkumar-developer-ieee/", label: "LinkedIn" },
    { icon: FaEnvelope, link: "mailto:kumararpit9438@gmail.com", label: "Email" },
  ];

  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center"
    >
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Full-Stack Developer | AI Enthusiast
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Arpit Kumar
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-lightGrey"
      >
        Building scalable web applications using<br className="hidden md:block" />
        MERN, MEAN, Java, Spring Boot and AI technologies.<br /><br />
        Passionate about creating impactful digital solutions<br className="hidden md:block" />
        with modern software engineering practices.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 mt-6"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          className="px-6 py-3 bg-orange text-white rounded-lg font-semibold hover:bg-orange/80 transition-all duration-300 cursor-pointer uppercase text-sm tracking-wide"
        >
          View Projects
        </Link>
        <a
          href={resumePdf}
          download="Arpit_Kumar_Resume.pdf"
          className="px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:border-orange hover:text-orange transition-all duration-300 uppercase text-sm tracking-wide flex items-center justify-center"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex gap-4 mt-4"
      >
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.link}
              aria-label={social.label}
              className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white hover:text-orange hover:border-orange transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default HeroText;
