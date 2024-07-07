import dynamic from 'next/dynamic';

// Dynamically import the Card component
const Card = dynamic(() => import('../components/Card'), { ssr: false });

const cards = [
  { image: '/about-photo.webp', text: 'This is the content of the first card.', title: 'I call Vancouver BC my home' },
  { image: '/about-coding-pic.webp', text: 'This is the content of the second card.', title: 'I love coding and building applications' },
  { image: '/about-music.webp', text: 'This is the content of the third card.', title: 'My hobbies include hiking and painting' },
];

const About = () => {
  return (
    <section id="about" className="p-8 bg-secondary text-center">
      <h2 className="text-4xl font-bold mb-4 text-dark">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">I am a passionate developer with experience in building modern web applications.</p>
      <div className="flex flex-col items-center">
        {cards.map((card, index) => (
          <div key={index} className={`flex items-center mb-8 w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {index % 2 === 0 && (
              <>
                <Card {...card} position="left" />
                <h1 className="text-2xl text-black mx-4">{card.title}</h1>
              </>
            )}
            {index % 2 !== 0 && (
              <>
                <h1 className="text-2xl text-black mx-4">{card.title}</h1>
                <Card {...card} position="right" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
