import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
      <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden border-4 border-accent/20 p-1">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent/20 to-accent/5 flex items-center justify-center text-accent text-4xl font-bold">
          HV
        </div>
        {/* Replace the div above with an Image component when the actual hero image is available */}
        {/* <Image src="/assets/hero.jpg" alt="Himanshi Verma" fill className="object-cover" /> */}
      </div>

      <h2 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
        Full Stack Developer & AIML Student
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Himanshi Verma
      </h1>
      <p className="text-zinc-400 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
        I build scalable web applications and AI-powered solutions using modern technologies.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button href="#projects">
          View Projects <ArrowRight className="inline-block ml-2 w-4 h-4" />
        </Button>
        <Button href="#contact" variant="secondary">
          Contact Me
        </Button>
        <Button href="/resume.pdf" variant="secondary">
          Download Resume
        </Button>
      </div>

      <div className="flex gap-6 items-center">
        <a
          href="https://github.com/Vermahimanshi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-accent transition-colors"
        >
          <GitHubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshi-verma-b4172a298/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-accent transition-colors"
        >
          <LinkedInIcon className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
