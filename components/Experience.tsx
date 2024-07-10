import { MacbookScroll } from "./MacbookScroll";

const Experience = () => {
    return (
      <section id="experience" className="p-12 bg-primary text-center relative">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark">Experience</h2>
        <MacbookScroll 
        src={`/experience.m4v`}
        showGradient={false}/>
      </section>
    );
  };
  
  export default Experience;
  