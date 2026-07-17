import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Filter } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import SectionTitle from '../components/SectionTitle'
import { projects, projectCategories } from '../data/portfolioData'

function BentoCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group glass-card rounded-2xl overflow-hidden hover:border-primary-500/15 transition-all duration-500 ${
        featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative bg-gradient-to-br from-surface-800 to-surface-900 overflow-hidden ${
        featured ? 'h-56 md:h-72' : 'h-40'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 to-accent-500/8 group-hover:from-primary-500/15 group-hover:to-accent-500/15 transition-all duration-700" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-700 group-hover:scale-110 ${
            featured ? 'text-8xl md:text-9xl' : 'text-6xl'
          }`}>
            {project.name[0]}
          </span>
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary-500/20 text-primary-400 border border-primary-500/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/20">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className={`p-5 ${featured ? 'md:p-7' : ''}`}>
        <h3 className={`font-bold text-white mb-2 group-hover:text-primary-400 transition-colors ${
          featured ? 'text-xl md:text-2xl' : 'text-lg'
        }`}>
          {project.name}
        </h3>
        <p className={`text-surface-200/50 leading-relaxed mb-4 ${
          featured ? 'text-sm md:text-base' : 'text-sm line-clamp-2'
        }`}>
          {project.description}
        </p>

        {featured && project.features && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.features.map((f) => (
              <span
                key={f}
                className="px-2 py-0.5 rounded text-[10px] font-medium bg-accent-500/10 text-accent-400/70"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-surface-200/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-white/[0.04] text-surface-200/70 hover:bg-white/[0.08] hover:text-white transition-all"
          >
            <GithubIcon size={14} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-white text-surface-950 hover:bg-surface-100 transition-all"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Featured Work"
          title="Projects"
          description="A showcase of applications I've built to learn, grow, and solve real problems."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          <Filter size={14} className="text-surface-200/40 mr-1" />
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-surface-950 shadow-lg'
                  : 'glass-card text-surface-200/60 hover:text-white hover:border-primary-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
          >
            {filteredProjects.map((project, i) => (
              <BentoCard
                key={project.id}
                project={project}
                index={i}
                featured={project.featured && i === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-surface-200/40 py-16 text-sm"
          >
            No projects in this category yet. Check back soon!
          </motion.p>
        )}
      </div>
    </section>
  )
}
