import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <h3 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Connect</h3>
          <h2 className="text-5xl font-bold mb-8">Let's build something <span className="text-accent">great</span> together.</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Email</p>
                <a href="mailto:vermahimanshi49@gmail.com" className="text-white hover:text-accent transition-colors">
                  vermahimanshi49@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Phone</p>
                <a href="tel:+918604707494" className="text-white hover:text-accent transition-colors">
                  +91-8604707494
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest mb-1">Location</p>
                <p className="text-white">Ghaziabad, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Himanshi Verma"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                <input
                  type="email"
                  placeholder="hello@example.com"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
              <textarea
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-accent/90 transition-all active:scale-95"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
