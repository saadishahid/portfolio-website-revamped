import { ContainerScroll } from "./ContainerScroll";

const Skills = () => {
  return (
    <section id="skills" className="p-8 bg-primary">
      <ContainerScroll titleComponent={<h1>Skills</h1>}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/RPa3_AD1_Vs?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContainerScroll>
    </section>
  );
};

export default Skills;
