import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white leading-relaxed text-lg max-w-3xl">
        I’m a passionate frontend developer with a strong foundation in React.js and
        modern web technologies. I love crafting visually appealing, responsive, and
        performant user interfaces. My journey includes building real-world projects with
        Material UI, Tailwind CSS, and efficient state management using Redux and React Query.
        <br />
        <br />
        I enjoy working on creative and challenging applications — from elegant landing pages to full-scale web platforms.
        I focus on writing clean, scalable code and continuously improving the user experience.
        I’m always learning and pushing the boundaries of what I can do with frontend technologies.
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
