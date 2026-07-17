import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import SectionTitle from '../components/SectionTitle'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Let&apos;s work together</h3>
              <p className="text-sm text-surface-200/50 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
                of your vision. Feel free to reach out!
              </p>

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-surface-200/40 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-white hover:text-primary-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-surface-200/40 uppercase tracking-wider">Location</p>
                    <p className="text-sm text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-6">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-surface-200/50 hover:text-white hover:border-primary-500/20 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-surface-200/50 hover:text-white hover:border-primary-500/20 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-surface-200/50 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder-surface-200/30 focus:outline-none focus:ring-1 focus:ring-primary-500/40 focus:border-primary-500/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-surface-200/50 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder-surface-200/30 focus:outline-none focus:ring-1 focus:ring-primary-500/40 focus:border-primary-500/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-surface-200/50 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder-surface-200/30 focus:outline-none focus:ring-1 focus:ring-primary-500/40 focus:border-primary-500/30 transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-surface-200/50 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white text-sm placeholder-surface-200/30 focus:outline-none focus:ring-1 focus:ring-primary-500/40 focus:border-primary-500/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >
                    <CheckCircle size={16} />
                    <span className="text-sm font-medium">Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-surface-950 font-semibold text-sm hover:bg-surface-100 disabled:opacity-50 transition-all duration-300 cursor-pointer"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
