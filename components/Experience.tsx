import { MacbookScroll } from "./MacbookScroll";

const Experience = () => {
    return (
      <section id="experience" className="p-8 bg-white">
        <MacbookScroll 
        src={`/experience.m4v`}
        showGradient={false}/>
      </section>
    );
  };
  
  export default Experience;
  