import Link from "next/link";
import { NavBar } from "../../components/nav";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Zap, 
  Cpu, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Mail, 
  Github as GithubIcon, 
  Linkedin as LinkedinIcon, 
  ShieldCheck,
  Code2,
  Globe,
  Database
} from "lucide-react";
import { PROJECTS, TECH_STACK, WORKFLOW, CAPABILITIES, TIMELINE } from "../../data/portfolio";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const HomePage = () => {
  return (
    <div className="bg-[#0F1115] text-white min-h-screen font-sans selection:bg-primary/30">
      <NavBar />
      
      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8"
            >
              <Zap size={14} className="fill-current" />
              <span>Open for MVP Projects in 2026</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
            >
              Helping Founders Turn Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C778DD] to-blue-400">Working MVPs.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Full-Stack Engineer specializing in high-performance web applications. I build real systems that scale, shipping your MVP from concept to launch in weeks.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link 
                href="#projects" 
                className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_20px_rgba(199,120,221,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TRUST / CREDIBILITY SECTION */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto max-w-6xl">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: <Cpu className="text-primary" />, title: "AI-Powered Systems", desc: "Building intelligent apps with OpenAI & Computer Vision" },
                { icon: <Layers className="text-blue-400" />, title: "Scalable APIs", desc: "Designed robust Node.js & GraphQL backends" },
                { icon: <Globe className="text-purple-400" />, title: "Real-time Apps", desc: "Low-latency systems using WebSockets & Socket.io" },
                { icon: <ShieldCheck className="text-green-400" />, title: "Secure Payments", desc: "Integrated robust multi-vendor checkout flows" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold mb-4">Proof in the Build</h2>
                <p className="text-gray-400">Selected projects that demonstrate end-to-end product thinking and technical execution.</p>
              </div>
              <Link href="/projects" className="text-primary font-medium flex items-center gap-2 hover:underline">
                See all projects <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary/30 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-900">
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                      <div className="flex gap-4">
                        <Link href={project.live} target="_blank" className="px-4 py-2 bg-white text-black rounded-lg text-sm font-bold">Live Demo</Link>
                        <Link href={project.github} target="_blank" className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-sm font-bold border border-white/30">GitHub</Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-primary/10 text-primary border border-primary/20 rounded-md">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-white/50 uppercase mb-2">The Problem</h4>
                        <p className="text-sm text-gray-300">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white/50 uppercase mb-2">What I Built</h4>
                        <p className="text-sm text-gray-300">{project.built}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW I HELP STARTUPS */}
        <section id="process" className="py-32 px-6 bg-white/[0.02]">
          <div className="container mx-auto max-w-6xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              From Idea to Reality
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {WORKFLOW.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeInUp}
                  className="relative"
                >
                  {idx !== WORKFLOW.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[100%] w-full h-[2px] bg-gradient-to-r from-[#C778DD]/30 to-transparent -z-10" />
                  )}
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-2xl mb-8">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Modern Solutions for Fast-Growing Startups</h2>
                <p className="text-gray-400 text-lg mb-12">I specialize in building complex, data-driven applications that provide real value to users and founders.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CAPABILITIES.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Calendar className="text-primary" /> Build Speed
                  </h3>
                  <div className="space-y-8">
                    {TIMELINE.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary" />
                          {idx !== TIMELINE.length - 1 && <div className="w-[1px] h-12 bg-white/20 mt-2" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">{item.week}</p>
                          <p className="font-medium text-gray-200">{item.task}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Modern Stack</h2>
              <p className="text-gray-400">Reliable tools for high-performance products.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Code2 className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-bold mb-6">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.frontend.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Database className="text-blue-400 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-6">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.backend.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Rocket className="text-purple-400 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-6">Infrastructure</h3>
                <div className="flex flex-wrap gap-3">
                  {TECH_STACK.infrastructure.map((t, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-8">The Builder Behind the Code</h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              I&apos;m Uthman Abdulganiyu (Auspicious), a Full-Stack Engineer who thrives at the intersection of startup ideas and technical execution. 
              My goal is to eliminate the technical friction that founders face, building robust MVPs that allow you to focus on growth and product-market fit. 
              I don&apos;t just write code; I build systems that solve real problems.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></Link>
              <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition-colors"><LinkedinIcon /></Link>
              <Link href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors"><Mail /></Link>
            </div>
          </div>
        </section>

        {/* FINAL CALL-TO-ACTION */}
        <section id="contact" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="p-12 md:p-20 rounded-[3rem] bg-primary relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-blue-500 opacity-90 -z-10" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build Your MVP?</h2>
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Let&apos;s turn your vision into a working product. I&apos;m currently accepting new projects for Q2 2026.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link 
                    href="mailto:hello@example.com" 
                    className="px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank"
                    className="px-10 py-5 bg-black/20 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-black/30 transition-colors"
                  >
                    Connect on LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Auspicious (Uthman Abdulganiyu). Built for high-performance startups.</p>
      </footer>
    </div>
  );
};

