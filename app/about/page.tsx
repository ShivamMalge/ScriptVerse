"use client"

import { motion } from "framer-motion"
import { Zap, Coffee, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-black tech-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              ABOUT <span className="text-primary">US</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
              The minds behind the digital revolution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full px-4 mx-auto py-16 bg-black circuit-pattern">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Our Story
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-lg opacity-75"></div>
                <div className="relative bg-black overflow-hidden">
                  <img src="/scriptverse.png" alt="Our team at work" className="w-full h-auto" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tighter">From Vision to Reality</h3>
              <div className="space-y-6 text-gray-300 font-mono text-sm">
                <p>
                Founded in the last quarter of 2024, ScriptVerse is a creative tech collective born from a shared vision: 
                to push the boundaries of what&apos;s possible in digital experiences. What started as three passionate tech 
                enthusiasts coding late nights in a tiny apartment has now grown into a cutting-edge studio.
                </p>
                <p>
                In a short span, we&apos;ve proudly served over 10 clients and completed 50+ personal, 
                college, and club projects — each one a reflection of our obsession with clean code, 
                futuristic design, and user-first innovation.
                </p>
                <p>
                We believe that technology should be both functional and mind-blowing — a fusion 
                of logic and artistry. Every project we take on is an opportunity to challenge 
                convention and create something the world hasn&apos;t seen before.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full px-4 mx-auto py-24 bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">Our Values</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            The principles that guide our creative process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Zap className="h-8 w-8" />,
              title: "Innovation First",
              description:
                "We never settle for the status quo. Every project is an opportunity to innovate and push boundaries.",
            },
            {
              icon: <Lightbulb className="h-8 w-8" />,
              title: "Creative Excellence",
              description:
                "We blend technical expertise with artistic vision to create experiences that are both functional and beautiful.",
            },
            {
              icon: <Coffee className="h-8 w-8" />,
              title: "Passion Driven",
              description:
                "We're genuinely passionate about what we do. That enthusiasm fuels our creativity and problem-solving abilities.",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-white/10 p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-primary to-secondary text-black">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 font-mono text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full px-4 mx-auto py-24 bg-black tech-pattern">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Our Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
            The key milestones that shaped our company
          </p>
        </motion.div>

        {/* Mobile Timeline View */}
        <div className="md:hidden space-y-6">
          {[
            {
              year: "2020",
              title: "The Beginning",
              description:
                "Four tech enthusiasts founded ScriptVerse in a small apartment with a vision to create cutting-edge digital experiences.",
            },
            {
              year: "2021",
              title: "First Major Client",
              description:
                "Landed our first enterprise client and delivered a revolutionary web application that exceeded expectations.",
            },
            {
              year: "2022",
              title: "Team Expansion",
              description: "Grew to a team of 12 specialists across development, design, and project management.",
            },
            {
              year: "2023",
              title: "New Office",
              description: "Moved into our current headquarters in the heart of the tech district.",
            },
            {
              year: "2024",
              title: "International Projects",
              description: "Expanded our client base to include companies from Europe, Asia, and Australia.",
            },
            {
              year: "2025",
              title: "The Future",
              description: "Continuing to push boundaries and redefine what's possible in digital experiences.",
            },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/50 border border-white/10 p-6 hover:border-primary/50 transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-secondary text-black text-sm font-bold mb-2 font-mono">
                {milestone.year}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
              <p className="text-gray-300 font-mono text-sm">{milestone.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline View */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

          {[
            {
              year: "2020",
              title: "The Beginning",
              description:
                "Four tech enthusiasts founded ScriptVerse in a small apartment with a vision to create cutting-edge digital experiences.",
            },
            {
              year: "2021",
              title: "First Major Client",
              description:
                "Landed our first enterprise client and delivered a revolutionary web application that exceeded expectations.",
            },
            {
              year: "2022",
              title: "Team Expansion",
              description: "Grew to a team of 12 specialists across development, design, and project management.",
            },
            {
              year: "2023",
              title: "New Office",
              description: "Moved into our current headquarters in the heart of the tech district.",
            },
            {
              year: "2024",
              title: "International Projects",
              description: "Expanded our client base to include companies from Europe, Asia, and Australia.",
            },
            {
              year: "2025",
              title: "The Future",
              description: "Continuing to push boundaries and redefine what's possible in digital experiences.",
            },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? "pr-8 md:pr-0 md:text-right md:mr-auto md:ml-0 md:pl-0" : "pl-8 md:pl-0 md:text-left md:ml-auto md:mr-0 md:pr-0"} md:w-[calc(50%-20px)]`}
            >
              <div
                className={`absolute top-0 ${index % 2 === 0 ? "right-0 md:left-[calc(100%+20px)]" : "left-0 md:right-[calc(100%+20px)]"} w-6 h-6 bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(0,255,170,0.5)] z-10`}
              ></div>
              <div className="bg-black/50 border border-white/10 p-6 hover:border-primary/50 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-secondary text-black text-sm font-bold mb-2 font-mono">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-300 font-mono text-sm">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
