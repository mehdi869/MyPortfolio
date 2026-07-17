import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { skills, softSkills } from '../data/portfolioData'

function SkillItem({ skill, index }) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className="glass-card rounded-xl p-4 group hover:border-primary-500/15 transition-all duration-300 cursor-default"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center text-primary-400 group-hover:text-primary-300 transition-colors shrink-0">
          <Icon size={18} />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white group-hover:text-primary-300 transition-colors">
            {skill.name}
          </div>
          {skill.description && (
            <div className="text-[11px] text-surface-200/40 leading-relaxed truncate">
              {skill.description}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const categories = Object.entries(skills)

  return (
    <section id="tech-stack" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Expertise"
          title="Tech Stack"
          description="Technologies I use to build modern web applications."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(([key, category]) => {
            const CatIcon = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === key
                    ? 'bg-white text-surface-950 shadow-lg'
                    : 'glass-card text-surface-200/60 hover:text-white hover:border-primary-500/20'
                }`}
              >
                <CatIcon size={15} />
                {category.title}
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {skills[activeCategory].items.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16">
          <SectionTitle
            subtitle="Beyond Code"
            title="Soft Skills"
          />
          <div className="flex flex-wrap justify-center gap-2.5">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="px-5 py-2 rounded-full glass-card text-sm font-medium text-surface-200/60 hover:text-white hover:border-primary-500/20 transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
