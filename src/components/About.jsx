import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ServiceCard = ({ service, index }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" options={{
        max: 45,
        scale: 1,
        speed: 450
      }}>
        <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{service.title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled FrontEnd Developer with experience in HTML, CSS, JavaScript and TypeScript, and expertise in frameworks like ReactJS and NextJS.
        I'm also can handle BackEnd process with NodeJS or Java Spring.
        I'm a quick learner and collaborate closely with clients to create efficent, scalable and user-friendly solutions that solve real-world problems.
        Let's work together to bring together your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about");