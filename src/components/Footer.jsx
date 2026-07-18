import { GithubIcon, LinkedinIcon, TwitterIcon, CodePenIcon } from './BrandIcons'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

const socialLinks = [
  { icon: GithubIcon, url: personalInfo.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, url: personalInfo.social.linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-sm">
                {personalInfo.firstName[0]}
              </div>
              <span className="font-semibold text-white">{personalInfo.name}</span>
            </div>
            <p className="text-surface-200/50 text-sm leading-relaxed max-w-xs">
              {personalInfo.bio.short}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-surface-200/50 hover:text-primary-400 transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-surface-200/50 hover:text-white hover:border-primary-500/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-xs text-surface-200/30 mt-4">{personalInfo.location}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-200/30">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-surface-200/30 hover:text-primary-400 transition-colors cursor-pointer"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  )
}
