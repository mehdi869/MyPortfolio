import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons";
import SectionTitle from "../components/SectionTitle";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {


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
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-surface-200/40 uppercase tracking-wider">
                      Email
                    </p>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-primary-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-surface-200/40 uppercase tracking-wider">
                      Location
                    </p>

                    <p className="text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary-500/20 transition-all"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-primary-500/20 transition-all"
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
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
              <div className="max-w-xl">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-5">
                  Open for Freelance Work
                </span>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Build Something Great Together
                </h3>

                <p className="text-surface-200/60 leading-relaxed mb-8">
                  Whether you have a project idea, freelance opportunity,
                  internship, or simply want to connect, feel free to reach out.
                  I'm always interested in discussing web development, MERN
                  applications, and AI-powered solutions.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-surface-950 font-semibold text-sm hover:bg-surface-100 transition-all duration-300"
                  >
                    <Mail size={16} />
                    Send Email
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <p className="text-xs text-surface-200/40 uppercase tracking-wider mb-2">
                      Current Focus
                    </p>
                    <p className="text-white font-medium">
                      MERN Stack & AI Applications
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <p className="text-xs text-surface-200/40 uppercase tracking-wider mb-2">
                      Availability
                    </p>
                    <p className="text-emerald-400 font-medium">
                      Available for Opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
