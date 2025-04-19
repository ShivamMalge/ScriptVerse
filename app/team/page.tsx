"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Code, Gamepad2, FileSearch } from "lucide-react"
import Head from "next/head"

const team = [
  {
    name: "Shivam Malge",
    role: "Lead Developer",
    bio: "AI and Web-Developement Enthusiast",
    skills: ["React", "Three.js", "Node.js", "NextJS"],
    image: "/shivam.jpeg",
    social: {
      github: "https://github.com/ShivamMalge",
      instagram: "https://www.instagram.com/epsilon_edge/",
      linkedin: "https://www.linkedin.com/in/shivam-malge-12523a293/",
    },
    funFact: "Caffine Addict",
  },
  {
    name: "Somdipto Nandy",
    role: "UI/UX Designer and Front-End Developer",
    bio: "Digital artist and interface designer specializing in futuristic, immersive user experiences that push creative boundaries.",
    skills: ["Figma", "Motion Design", "3D Modeling", "Blender"],
    image: "/som.png",
    social: {
      github: "https://github.com/somdipto/somdipto",
      instagram: "https://www.instagram.com/somdipto_nandy/",
      linkedin: "https://www.linkedin.com/in/somdipto-nandy-b914901aa/",
    },
    funFact: "Creates digital art while skydiving (virtually, of course)",
  },
  {
    name: "Karan Suthar",
    role: "Web-Developer and Python Developer",
    bio: "Pygame specialist with a background in game development and interactive storytelling through digital interfaces.",
    skills: ["Pygame", "Python", "Unity", "TypeScript"],
    image: "/karan.png",
    social: {
      github: "https://github.com/KaranJangid8656",
      instagram: "https://www.instagram.com/__karan_jangid",
      linkedin: "https://www.linkedin.com/in/karansuthar9565/",
    },
    funFact: "Plays his own Game Imao",
  },
]

export default function TeamPage() {
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null)

  return (
    <>
      <Head>
        <title>Our Team | ScriptVerse - Creative Tech Team</title>
        <meta name="description" content="Meet the brilliant minds behind ScriptVerse's digital creations." />
        <meta name="keywords" content="tech team, developers, designers, creative professionals" />
      </Head>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden bg-black tech-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>

          <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                OUR <span className="text-primary">TEAM</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
                The brilliant minds behind our digital creations
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="w-full px-4 mx-auto py-16 bg-black circuit-pattern">
          <div className="grid grid-cols-1 max-w-6xl sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4 border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name}, ${member.role} at ScriptVerse`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary font-mono text-sm sm:text-base">{member.role}</p>

                    <div className="flex space-x-3 mt-4">
                      <a
                        href={member.social.github}
                        className="text-white hover:text-primary transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a
                        href={member.social.instagram}
                        className="text-white hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Instagram profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-white hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Mobile Bio Section - Always visible on mobile */}
                <div className="block sm:hidden bg-black/50 border border-primary/30 p-4 mb-6">
                  <p className="text-gray-300 mb-4 font-mono text-xs">{member.bio}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">SKILLS</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-black/50 border border-primary/30 px-2 py-1 text-gray-200 font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">FUN FACT</h4>
                    <p className="text-gray-300 text-xs italic font-mono">{member.funFact}</p>
                  </div>
                </div>

                {/* Desktop Hover Bio - Only visible on hover on desktop */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeTeamMember === index ? 1 : 0,
                    height: activeTeamMember === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="hidden sm:block overflow-hidden"
                >
                  <div className="bg-black/50 border border-primary/30 p-6">
                    <p className="text-gray-300 mb-4 font-mono text-sm">{member.bio}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">SKILLS</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-black/50 border border-primary/30 px-3 py-1 text-gray-200 font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">FUN FACT</h4>
                      <p className="text-gray-300 text-sm italic font-mono">{member.funFact}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 sm:py-24 bg-black">
          <div className="w-full px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Our Team Values
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
                The principles that guide our creative process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <Code className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Technical Excellence",
                  description:
                    "We strive for perfection in every line of code, pushing the boundaries of what's possible.",
                },
                {
                  icon: <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Playful Innovation",
                  description:
                    "We believe the best digital experiences combine functionality with elements of play and delight.",
                },
                {
                  icon: <FileSearch className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Data-Driven Decisions",
                  description: "We let insights and analytics guide our creative process to ensure optimal results.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/50 border border-white/10 p-6 sm:p-8 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-primary to-secondary text-black">
                    {value.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-gray-300 font-mono text-xs sm:text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
