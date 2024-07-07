import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}
