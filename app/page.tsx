import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Connect from '@/components/sections/Connect';


export default function HomePage() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <div className="relative">
        <Connect />
      </div>
     
    </div>
  );
}
