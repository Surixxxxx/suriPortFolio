import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";


const projects = [
    {
    name: "Personal Blog",
    year: "Apr 2024",
    align: "left",
    image: "/images/blog.png",
    link: "https://surixxxxx.github.io/Personal_Blog/",
  },
  {
    name: "Grocery App",
    year: "May 2024",
    align: "left",
    image: "/images/grocery.png", 
    link: "https://surixxxxx.github.io/Grocery-App/",
  },
  {
    name: "Netflix Clone App",
    year: "Mar 2024",
    align: "right",
    image: "/images/website-img-3.jpg", 
    link: "https://your-netflix-clone.com",
  },
  {
    name: "Matrimony Website",
    year: "Present",
    align: "right",
 image: "/images/website-img-3.jpg",
    link: "https://your-matrimony-app.com",
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
  const align = index % 2 === 0 ? "left" : "right"; // alternate alignment
  return (
    <SingleProject
      key={index}
      name={project.name}
      year={project.year}
      align={align}
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


