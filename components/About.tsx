const About = () => {
  const focusAreas = [
    'Full Stack Development',
    'REST APIs',
    'AI Integration',
    'DSA',
    'Backend Systems',
  ];

  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">About Me</h3>
          <h2 className="text-4xl font-bold mb-8">Passionate about Building Future-Ready Solutions</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
            <p>
              I am a B.Tech Computer Science (AIML) student at KIET Group of Institutions with a strong interest in Full Stack Development, AI-powered applications, backend architecture, and scalable systems.
            </p>
            <p>
              I enjoy building modern web applications using React.js, Next.js, Node.js, Express.js, Spring Boot, and MongoDB. I also have experience working with REST APIs, JWT authentication, RBAC systems, and scalable backend workflows.
            </p>
            <p>
              I actively practice Data Structures & Algorithms and enjoy solving real-world problems through clean and efficient software solutions.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-all"></div>
          
          <div className="relative z-10">
            <div className="mb-10">
              <span className="text-5xl font-bold text-white mb-2 block">8.0</span>
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-semibold">Current CGPA</span>
            </div>

            <h4 className="text-white font-bold mb-6">Focus Areas</h4>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-accent/50 hover:text-white transition-all cursor-default"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
