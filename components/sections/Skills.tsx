import { ContainerScroll } from "../ContainerScroll";

const Skills = () => {
  return (
    <section id="skills" className="p-12 bg-primary text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark">Skills</h2>
      <p className="text-lg md:text-2xl text-gray-700 ">I ❤️ working across the stack!</p>


      <ContainerScroll titleComponent={<h1></h1>}>
        <video
          width="100%"
          height="100%"
          src="./assets/skills.m4v"
          title="YouTube video player"
          playsInline
          loop
          autoPlay
          data-inline-media
          muted
          className="flex items-center justify-center w-full h-full"
          
        ></video>
      </ContainerScroll>
    </section>
  );
};

export default Skills;
