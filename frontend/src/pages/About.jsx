import React from 'react';
import { Users, Globe, Award, Heart, Github, Twitter, Linkedin, ArrowRight, BookOpen, MessageSquare, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Monthly Readers", value: "50K+" },
    { label: "Expert Tutorials", value: "200+" },
    { label: "Community Writers", value: "40+" },
    { label: "Growth YoY", value: "150%" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Editor-in-Chief",
      bio: "Ex-Google engineer focused on translating complex system design into readable, actionable blog posts.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Sarah Williams",
      role: "Technical Content Strategist",
      bio: "Crafting deep-dives into React performance and modern UI patterns that help developers ship faster.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Backend Columnist",
      bio: "Cloud infrastructure expert sharing weekly insights on Node.js scalability and distributed databases.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop"
    },
  ];

  return (
    // Updated container with dark mode support
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* === Hero Section === */}
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" /> The Modern Publication
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight dark:text-white">
            Where code meets <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Clear Perspective.
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We are more than just a blog. We are a digital library for the modern developer, bridging the gap between documentation and real-world deployment through expert storytelling and deep technical analysis.
          </p>
        </section>

        {/* === Stats Section === */}
        <section className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-12 transition-colors">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400">
                  {stat.value}
                </h3>
                <p className="text-gray-500 dark:text-gray-500 font-medium uppercase tracking-wide text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === Our Mission === */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 opacity-10 dark:opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Editorial team" 
                className="relative rounded-3xl shadow-2xl w-full object-cover h-100 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Editorial Integrity & Innovation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Our content strategy isn't about page views—it's about "aha!" moments. We curate the noise of the tech world into digestible, high-impact articles.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Actionable Insights", desc: "No fluff. Every article includes a practical takeaway you can use today." },
                  { icon: MessageSquare, title: "Community Driven", desc: "Our topics are chosen by you through comments and social engagement." },
                  { icon: Heart, title: "Open Education", desc: "Our core long-form guides will always be free and accessible to all." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md dark:hover:border-indigo-500/30 transition">
                    <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === Team Section === */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Meet the Writers</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The engineers and storytellers who turn complex code into compelling narratives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition"><Github size={20}/></button>
                    <button className="text-gray-400 hover:text-blue-400 transition"><Twitter size={20}/></button>
                    <button className="text-gray-400 hover:text-blue-700 transition"><Linkedin size={20}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === Call to Action === */}
        <section className="bg-gray-900 dark:bg-indigo-950 rounded-3xl p-12 text-center text-white overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Want to write for us?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              We are always looking for guest contributors to share their technical journey. Join our community of over 40 technical writers.
            </p>
            <button className="bg-white dark:bg-indigo-500 text-gray-900 dark:text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-50 dark:hover:bg-indigo-400 transition flex items-center gap-2 mx-auto shadow-lg">
              Apply as Writer <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;