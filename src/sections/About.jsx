import { motion } from 'framer-motion'
import { MapPin, Calendar, Coffee, Lightbulb, Target } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { personalInfo, aboutValues, funFacts } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="About Me"
          title="The Developer Behind the Code"
          description="Building things that matter, one commit at a time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-5">
              <p className="text-surface-200/70 text-base leading-relaxed">
                {personalInfo.bio.medium}
              </p>
              <p className="text-surface-200/70 text-base leading-relaxed">
                {personalInfo.bio.detailed}
              </p>
              <p className="text-surface-200/70 text-base leading-relaxed">
                From writing my first line of HTML to building full-stack MERN applications,
                every step has been a deliberate move toward mastering the craft. I&apos;m focused on
                building production-ready applications with clean architecture and polished UI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-sm text-surface-200/50">
                <MapPin size={14} className="text-primary-400" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-surface-200/50">
                <Calendar size={14} className="text-primary-400" />
                Since 2022
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target size={18} className="text-primary-400" />
                <h3 className="text-base font-bold text-white">Current Goals</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Master MERN stack and build production applications',
                  'Deepen understanding of backend architecture & auth',
                  'Build a complete SaaS product from scratch',
                  'Open freelance services and work with real clients',
                ].map((goal) => (
                  <li key={goal} className="flex items-start gap-3 text-sm text-surface-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb size={18} className="text-primary-400" />
                <h3 className="text-base font-bold text-white">Fun Facts</h3>
              </div>
              <ul className="space-y-2.5">
                {funFacts.map((fact) => (
                  <li key={fact} className="text-sm text-surface-200/60 flex items-start gap-2.5">
                    <span className="text-primary-400/60 mt-0.5 text-xs">&#10024;</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <SectionTitle
            subtitle="What Drives Me"
            title="Core Values"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutValues.map((value, i) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:border-primary-500/15 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/15 to-accent-500/15 flex items-center justify-center text-primary-400 group-hover:text-primary-300 mb-4 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-surface-200/50 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
