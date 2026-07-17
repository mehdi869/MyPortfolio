import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Code2,
  Database,
  Server,
  GitBranch,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { personalInfo } from '../data/portfolioData'

function AnimatedRole() {
  const roles = personalInfo.animatedRoles
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <span className="inline-block min-w-[260px] sm:min-w-[320px]">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="gradient-text font-bold"
      >
        {roles[index]}
      </motion.span>
    </span>
  )
}

function FloatingCodeSnippet({ icon: Icon, text, delay, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className="absolute glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-mono"
      style={{ left: x, top: y }}
    >
      <Icon size={14} className="text-primary-400 shrink-0" />
      <span className="text-surface-200/70 whitespace-nowrap">{text}</span>
    </motion.div>
  )
}

function DashboardWidget({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-3"
    >
      <div className="text-[10px] font-medium text-surface-200/50 uppercase tracking-wider mb-1">
        {label}
      </div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </motion.div>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-[92vh] flex items-center relative overflow-hidden">
      <div className="absolute top-24 right-10 w-72 h-72 bg-primary-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-sm text-primary-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.status}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4">
              Building scalable
              <br />
              web applications
              <br />
              with{' '}
              <span className="gradient-text">modern tech.</span>
            </h1>

            <div className="text-lg sm:text-xl text-surface-200/70 mb-6 h-8">
              {personalInfo.title} &mdash; <AnimatedRole />
            </div>

            <p className="text-surface-200/50 text-base leading-relaxed mb-8 max-w-lg">
              {personalInfo.bio.medium}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-surface-950 font-semibold text-sm hover:bg-surface-100 transition-all duration-300 cursor-pointer"
              >
                View Projects
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-light text-white font-semibold text-sm hover:border-primary-500/30 transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </button>
              <a
                href="#"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-light text-white font-semibold text-sm hover:border-primary-500/30 transition-all duration-300"
              >
                <Download size={16} />
                CV
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-surface-200/60 hover:text-white hover:border-primary-500/30 transition-all"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-surface-200/60 hover:text-white hover:border-primary-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md h-[420px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-3xl blur-2xl" />

              <div className="relative w-full h-full glass-card rounded-2xl overflow-hidden p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[10px] text-surface-200/40 font-mono ml-2">
                    workspace.tsx
                  </span>
                </div>

                <div className="flex-1 relative">
                  <FloatingCodeSnippet
                    icon={Code2}
                    text="const app = new MERNStack()"
                    delay={0.4}
                    x="5%"
                    y="5%"
                  />
                  <FloatingCodeSnippet
                    icon={Server}
                    text="app.use(express.json())"
                    delay={0.6}
                    x="15%"
                    y="25%"
                  />
                  <FloatingCodeSnippet
                    icon={Database}
                    text="await mongo.connect()"
                    delay={0.8}
                    x="0%"
                    y="48%"
                  />
                  <FloatingCodeSnippet
                    icon={GitBranch}
                    text="git push origin main"
                    delay={1.0}
                    x="20%"
                    y="70%"
                  />

                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-4 left-0 right-0 flex justify-center"
                  >
                    <div className="flex items-center gap-2 text-xs text-surface-200/40 font-mono">
                      <div className="w-1.5 h-4 bg-primary-400/60 animate-blink" />
                      Building...
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <DashboardWidget label="Status" value="Building" delay={1.2} />
                  <DashboardWidget label="Stack" value="MERN" delay={1.3} />
                  <DashboardWidget label="Commits" value="47 this week" delay={1.4} />
                  <DashboardWidget label="Uptime" value="99.9%" delay={1.5} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
