import { Award, Code2, Users, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code2 className="w-6 h-6 text-accent" />,
      title: '250+ DSA Problems',
      description: 'Solved over 250 problems on LeetCode with a rating of 1500+.',
    },
    {
      icon: <Users className="w-6 h-6 text-accent" />,
      title: 'Workshop Lead',
      description: 'Conducted Git & GitHub workshop for 50+ students at KIET.',
    },
    {
      icon: <Award className="w-6 h-6 text-accent" />,
      title: 'IdeaX Innovation',
      description: 'Led development of an AI-based health-tech solution at IdeaX.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-accent" />,
      title: 'Coding Contest Organizer',
      description: 'Organized COD (Code Optimize Dominate) at KIET CSE.',
    },
  ];

  return (
    <section className="py-24 bg-zinc-900/10 rounded-[4rem] border border-zinc-800/50">
      <div className="text-center mb-16">
        <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Milestones</h3>
        <h2 className="text-4xl font-bold">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-6">{item.icon}</div>
            <h4 className="text-lg font-bold mb-3">{item.title}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
