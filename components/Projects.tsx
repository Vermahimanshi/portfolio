import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './Icons';

const Projects = () => {
  const projects = [
    {
      title: 'Mind Space Layout',
      description: 'AI-powered mental health platform with anonymous communication and chatbot integration. Reduced query resolution time by 40%.',
      tech: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
      github: '#',
      live: 'https://mind-space-layout.netlify.app/',
    },
    {
      title: 'Hospital Food Management System',
      description: 'RBAC-based hospital meal and inventory management backend system with JWT authentication. Reduced operational errors by 30%.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: '#',
      live: 'https://medical-food-management-1.onrender.com/',
    },
    {
      title: 'Med-Brain',
      description: 'AI-powered prescription management system with secure role-based access and OpenAI API integration.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OpenAI API'],
      github: '#',
      live: 'https://medbrain.netlify.app/',
    },
    {
      title: 'PowerPoint Editor Web Application',
      description: 'Modern presentation editor with drag-and-drop support, multi-slide rendering, and JSON persistence.',
      tech: ['Next.js', 'TypeScript', 'Fabric.js', 'Redux Toolkit'],
      github: '#',
      live: 'https://power-point-editor-web-application.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="text-center mb-16">
        <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</h3>
        <h2 className="text-4xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col h-full"
          >
            <div className="p-8 flex-1">
              <h4 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 bg-zinc-900/80 border-t border-zinc-800 flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
              >
                <GitHubIcon className="w-4 h-4" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors ml-auto"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
