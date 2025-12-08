import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, ExternalLink, Code2, Database, Layout, Award, Terminal, Cpu, BookOpen } from 'lucide-react';
import { PROJECTS, EDUCATION, SKILL_CATEGORIES, CERTIFICATES, NAV_LINKS, ACADEMIC_HIGHLIGHTS } from './constants';
import ChatBot from './components/ChatBot';

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Custom navigation handler to prevent default browser behavior which can cause
  // "refused to connect" errors in some preview environments (like AI Studio)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, href: string) => {
    e.preventDefault();
    // Remove the '#' to get the ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0b1120]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex-shrink-0 font-display font-bold text-2xl text-white tracking-wider hover:text-sky-400 transition-colors"
            >
              AKSHAYA<span className="text-sky-400">.</span>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[100px]" />
          <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sky-400 font-medium mb-6 tracking-[0.2em] uppercase text-xs md:text-sm border border-sky-400/20 inline-block px-4 py-1.5 rounded-full bg-sky-400/5 backdrop-blur-sm">
              Portfolio
            </h2>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Akshaya U K
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Aspiring <span className="text-sky-200 font-medium">Full-Stack Developer</span> & <span className="text-indigo-200 font-medium">ML Enthusiast</span> <br className="hidden md:block"/>building clean, scalable software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-16">
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, '#projects')}
                className="px-8 py-4 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-400 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/25 cursor-pointer"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-8 py-4 bg-white/5 text-white rounded-full font-semibold hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm cursor-pointer"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex justify-center gap-8 text-slate-500">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors transform hover:scale-110"><Github size={28} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0077b5] transition-colors transform hover:scale-110"><Linkedin size={28} /></a>
              <a href="mailto:ukambika036@gmail.com" className="hover:text-sky-400 transition-colors transform hover:scale-110"><Mail size={28} /></a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            <ChevronDown size={32} className="text-slate-600 hover:text-white transition-colors" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative bg-[#0f172a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
             <div>
               <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8">About Me</h2>
               <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
                 <p>
                   I am a motivated <strong className="text-white font-semibold">Information Technology</strong> student (2022-2026) at the College of Engineering, Thalassery. I possess strong analytical skills and a drive for problem-solving.
                 </p>
                 <p>
                   My technical journey is defined by building robust full-stack applications using <span className="text-sky-300">Java</span>, <span className="text-sky-300">Python</span>, and <span className="text-sky-300">Flask</span>, while constantly expanding my knowledge in Machine Learning algorithms.
                 </p>
                 <p>
                   I am skilled in debugging, requirement gathering, and delivering software that works. Whether it's designing MySQL schemas for a Pizza Restaurant system or engineering features for Housing Price prediction, I focus on clean code and efficient execution.
                 </p>
               </div>
               
               <div className="mt-12 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><BookOpen size={20} className="text-indigo-400"/> Academic Highlights</h3>
                  <div className="space-y-4">
                    {ACADEMIC_HIGHLIGHTS.map((item, idx) => (
                      <div key={idx} className="flex gap-3">
                         <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                         <div>
                            <span className="text-slate-200 block text-sm font-medium">{item.title}</span>
                            <span className="text-slate-500 text-xs">{item.description}</span>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
             
             <div className="relative mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-indigo-500/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-[#1e293b] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
                  <h3 className="text-xl font-semibold text-white mb-8">Core Competencies</h3>
                  <ul className="space-y-8">
                    <li className="flex items-start">
                      <div className="bg-sky-500/10 p-3 rounded-lg mr-4 text-sky-400">
                         <Terminal size={24} />
                      </div>
                      <div>
                        <strong className="text-slate-100 block text-lg mb-1">Full-Stack Development</strong>
                        <span className="text-slate-400 text-sm leading-relaxed">Developing end-to-end web solutions with responsive frontends (HTML/CSS) and robust backends (Flask/PHP).</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-500/10 p-3 rounded-lg mr-4 text-indigo-400">
                         <Cpu size={24} />
                      </div>
                      <div>
                        <strong className="text-slate-100 block text-lg mb-1">Machine Learning</strong>
                        <span className="text-slate-400 text-sm leading-relaxed">Building regression models with Scikit-learn, performing feature engineering, and evaluating model accuracy.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-500/10 p-3 rounded-lg mr-4 text-purple-400">
                         <Database size={24} />
                      </div>
                      <div>
                        <strong className="text-slate-100 block text-lg mb-1">Database Management</strong>
                        <span className="text-slate-400 text-sm leading-relaxed">Designing efficient relational database schemas (MySQL), optimizing queries, and ensuring data integrity.</span>
                      </div>
                    </li>
                  </ul>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#0b1120] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              A comprehensive toolkit covering languages, frameworks, and core engineering concepts tailored for modern software development.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -5 }}
                className="bg-[#1e293b]/50 backdrop-blur-sm p-10 rounded-3xl border border-white/5 hover:border-sky-500/30 transition-all group relative overflow-hidden shadow-lg hover:shadow-sky-500/5"
              >
                {/* Background Icon Watermark */}
                <div className="absolute -top-6 -right-6 text-white/[0.02] transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                  {idx === 0 && <Code2 size={180} />}
                  {idx === 1 && <Layout size={180} />}
                  {idx === 2 && <Database size={180} />}
                </div>

                <div className="w-14 h-14 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:from-sky-500 group-hover:to-blue-600 transition-all duration-300">
                  <div className="text-sky-400 group-hover:text-white transition-colors">
                     {idx === 0 && <Code2 size={28} />}
                     {idx === 1 && <Layout size={28} />}
                     {idx === 2 && <Database size={28} />}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-8 relative z-10">{category.title}</h3>
                <div className="flex flex-wrap gap-3 relative z-10">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-[#0b1120] text-slate-300 text-sm font-medium rounded-lg border border-white/10 hover:border-sky-500/50 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative bg-[#0f172a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Real-world applications demonstrating full-stack engineering and machine learning capabilities.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2, ease: "easeOut" } }
                }}
                className="group relative bg-[#1e293b] rounded-3xl overflow-hidden border border-white/5 hover:border-sky-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-900/10 flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {project.title}
                    </h3>
                    <ExternalLink size={20} className="text-slate-600 hover:text-sky-400 transition-colors cursor-pointer" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-bold text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full uppercase tracking-wider">{t}</span>
                    ))}
                  </div>
                  
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {project.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm leading-relaxed">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates */}
      <section id="education" className="py-32 bg-[#0b1120] relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-sky-600/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            {/* Education Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
               <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-white mb-10">
                <span className="p-3 bg-sky-500/10 rounded-xl text-sky-400"><Award size={24} /></span>
                Education
              </h3>
              <div className="relative border-l border-white/10 ml-4 space-y-12 pb-4">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-12">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                    <div className="bg-[#1e293b]/50 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
                      <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-bold rounded-full mb-3 border border-sky-500/20">{edu.year}</span>
                      <h4 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{edu.degree}</h4>
                      <p className="text-lg text-slate-300 mb-1">{edu.institution}</p>
                      <p className="text-sm text-slate-500 mb-4">{edu.location}</p>
                      <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">{edu.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-white mb-10">
                <span className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400"><Award size={24} /></span>
                Certifications
              </h3>
              <div className="grid gap-4">
                {CERTIFICATES.map((cert, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-[#1e293b] p-5 rounded-2xl border border-white/5 flex justify-between items-center group cursor-default hover:bg-[#1e293b]/80 transition-all hover:border-indigo-500/30"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-200 group-hover:text-white transition-colors">{cert.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-slate-600 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Award size={14} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's Connect</h2>
            <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light">
              I am currently available for internships and full-time opportunities in Full-Stack Development and AI/ML.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <a href="mailto:ukambika036@gmail.com" className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-5 bg-[#1e293b] hover:bg-sky-500 rounded-2xl transition-all border border-white/5 hover:border-transparent group shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1">
                <Mail className="text-sky-400 group-hover:text-white transition-colors" size={24} />
                <span className="text-lg text-slate-300 group-hover:text-white font-medium">ukambika036@gmail.com</span>
              </a>
              <a href="tel:9744978115" className="w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-5 bg-[#1e293b] hover:bg-indigo-500 rounded-2xl transition-all border border-white/5 hover:border-transparent group shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1">
                <Phone className="text-indigo-400 group-hover:text-white transition-colors" size={24} />
                <span className="text-lg text-slate-300 group-hover:text-white font-medium">+91 9744978115</span>
              </a>
            </div>

            <footer className="border-t border-white/5 pt-10 text-slate-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} Akshaya U K. All rights reserved.</p>
              <div className="flex items-center gap-2">
                 <span>Built with</span>
                 <span className="text-slate-400">React</span>
                 <span>&</span>
                 <span className="text-sky-400 font-medium flex items-center gap-1"><Terminal size={12}/> Gemini AI</span>
              </div>
            </footer>
          </motion.div>
        </div>
      </section>

      {/* Floating Chatbot */}
      <ChatBot />
      
    </div>
  );
};

export default App;