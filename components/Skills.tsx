const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript'],
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Spring Boot'],
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'Redis'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'Figma', 'AWS', 'Netlify', 'Render'],
    },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="text-center mb-16">
        <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Expertise</h3>
        <h2 className="text-4xl font-bold">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-accent/30 transition-all group"
          >
            <h4 className="text-xl font-bold mb-6 text-white group-hover:text-accent transition-colors">
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl bg-zinc-800/50 text-zinc-400 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
