import { ContainerScroll } from "./ContainerScroll";

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-primary">
      <ContainerScroll titleComponent={<h1></h1>}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerScroll>
    </section>
  );
};

export default Skills;
