import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';
import Experience from '@/components/Experience';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
      <Contact />
    </div>
  );
}
