import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Technoviva Ltd",
    date: "Oct 2023 - Apr 2024",
    responsibilities: [
      "Developed and maintained dynamic user interfaces using React.js and Material UI.",
      "Worked on a live matrimony web application using MERN stack.",
      "Integrated APIs, implemented pagination.",
     
    ],
  },
  {
    job: "React Developer",
    company: "Freelance Projects",
    date: "May 2024 - Present",
    responsibilities: [
      "Built responsive and animated kindergarten and e-commerce websites using Material UI and custom CSS.",
      "Implemented reusable UI components with Framer Motion and scroll-based animations.",
    ],
  },
  {
    job: "Full-Stack Developer (MERN)",
    company: "Personal Projects",
    date: "Ongoing",
    responsibilities: [
      "Built end-to-end solutions using MongoDB, Express.js, React.js, and Node.js.",
      "Developed features like user interest matching, search, and filtering using custom APIs.",
  
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between flex-wrap gap-10">
      {experiences.map((experience, index) => (
        <div key={index} className="flex items-center gap-6">
          <SingleExperience experience={experience} />
          {index < experiences.length - 1 && (
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllExperiences;
