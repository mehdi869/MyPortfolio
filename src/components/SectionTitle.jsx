import { motion } from 'framer-motion'

export default function SectionTitle({ subtitle, title, description, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}
    >
      {subtitle && (
        <span className="inline-block text-primary-400 text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-surface-200/50 text-base max-w-xl leading-relaxed ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
