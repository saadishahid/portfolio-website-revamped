
import dynamic from 'next/dynamic';


// Dynamically import the Card component
const Card = dynamic(() => import('../Card'), { ssr: false });

const cards = [
  { image: '/assets/about-photo.webp', title: 'I call Vancouver BC my home' },
  { image: '/assets/about-coding-pic.webp', title: 'I love coding and building applications' },
  { image: '/assets/about-music.webp', title: '...and dream of becoming a rockstar' },
];

const About = () => {
  return (

    <section id="about" className="p-12 bg-secondary text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-dark">About Me</h2>
      <p className="text-lg md:text-2xl text-gray-700 ">I am a passionate developer with experience in building modern web applications.</p>
      
      <div className="flex flex-col items-center">
        {cards.map((card, index) => (
          <div key={index} className={`flex items-center flex-col md:flex-row w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
            {index % 2 === 0 && (
              <>
                <Card text={''} {...card}  />
                <h1 className="text-2xl text-black mx-4">{card.title}</h1>
              </>
            )}
            {index % 2 !== 0 && (
              <>
                <h1 className="hidden md:block text-2xl text-black mx-4">{card.title}</h1>
                <Card text={''} {...card}  />
                <h1 className="text-2xl text-black md:hidden mx-4">{card.title}</h1>

              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
