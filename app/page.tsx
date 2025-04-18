"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Code, Gamepad2, FileSearch } from "lucide-react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const projects = [
    {
      id: 1,
      title: "Neuro Forge",
      image: "/Neuro.png",
      description: "Creates AI Models just by drag and Drop",
      Link: "https://neuro-forge.vercel.app/",
    },
    {
      id: 2,
      title: "3D Ant Simulation",
      image: "/ant1.png",
      description: "3D simulation using ThreeJs",
      Link: "https://ai-ant.vercel.app/",
    },
    {
      id: 3,
      title: "Thrive | The Thrift Store",
      image: "/thrive.png",
      description: "Website for Thrive Business",
      Link: "https://thrive-store-clothing.framer.ai/?fbclid=PAZXh0bgNhZW0CMTEAAaeKzSUWwFC1NmGcgcwoOBWhikpUBkmCLsV9o3IdJKIXP6ZJqV4zCv1BtMV0Hg_aem_JZlHv-WBXoQaxgraC25zvw",
    },
  ];
  

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black tech-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
              SCRIPT<span className="text-primary">VERSE</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
              We build digital experiences from the future
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="group bg-primary hover:bg-primary/80 text-black border-0 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,170,0.5)]"
            >
              <Link href="/services">
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="group bg-transparent border border-primary/50 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105"
            >
              <Link href="/contact">
                Contact Us
                <Zap className="ml-2 h-5 w-5 group-hover:text-secondary transition-colors" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section> 

      {/* Services Preview */}
      <section className="py-16 sm:py-24 bg-black circuit-pattern">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-white tracking-tighter"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Digital Arsenal
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Cutting-edge websites and web applications that push the boundaries of what's possible online.",
                icon: <Code className="h-8 w-8" />,
                color: "from-primary to-primary/70",
              },
              {
                title: "Game-based UIs",
                description:
                  "Interactive interfaces powered by Pygame that transform mundane experiences into immersive adventures.",
                icon: <Gamepad2 className="h-8 w-8" />,
                color: "from-secondary to-secondary/70",
              },
              {
                title: "Custom ATS Tools",
                description:
                  "Bespoke applicant tracking systems that streamline your hiring process with AI-powered insights.",
                icon: <FileSearch className="h-8 w-8" />,
                color: "from-accent to-accent/70",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-black/50 border border-white/10 p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,170,0.2)]"
              >
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br ${service.color} text-black`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-300 font-mono text-sm">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-4 sm:mt-6 text-white hover:text-primary hover:bg-transparent p-0 group"
                  >
                    <Link href="/services">
                      Learn more
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              What our clients say about our digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "ScriptVerse transformed our online presence with a website that feels like it's from another dimension. Our engagement metrics have skyrocketed.",
                author: "Eliza Quantum",
                position: "Marketing Director, Nexus Corp",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The neural interface they designed for our platform has revolutionized how users interact with our product. Simply mind-blowing work.",
                author: "Ryder Phoenix",
                position: "CTO, Neural Systems",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Their ATS solution didn't just streamline our hiring—it completely reimagined it. We're now able to find talent we never would have discovered before.",
                author: "Nova Sterling",
                position: "Head of Talent, Cyber Industries",
                image: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-1 bg-gradient-to-r from-primary via-secondary to-accent">
                  <div className="bg-black p-6 sm:p-8 min-h-[320px] flex flex-col">
                    <div className="flex-grow">
                      <svg
                        className="h-6 sm:h-8 w-6 sm:w-8 text-primary mb-4 sm:mb-6 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">{testimonial.quote}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden border border-primary/30">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-3 sm:ml-4">
                        <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.author}</h4>
                        <p className="text-primary text-xs sm:text-sm font-mono">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="relative py-16 sm:py-24 bg-black overflow-hidden tech-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,170,0.1),transparent_70%)]"></div>

        <div className="container px-4 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
                Our Digital Footprint
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Explore our latest projects that redefine what's possible in the digital realm
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
               <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden aspect-video cursor-pointer"
                  >
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs sm:text-sm">
                          {project.description}
                        </p>
                        <a
                          href={project.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-transparent border border-primary/30 text-white hover:bg-primary/10 hover:text-white hover:border-primary text-xs sm:text-sm"
                          >
                            View Project
                          </Button>
                        </a>
                      </div>

                    </motion.div>
                  ))}
                </div>



          <div className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border border-primary/50 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              <Link href="/portfolio">
                View All Projects
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              The brilliant minds behind our digital creations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { name: "Shivam Malge", role: "Lead Developer", image: "/shivam.jpeg" },
              { name: "Somdipto Nandy", role: "UI/UX Designer", image: "/som.png" },
              { name: "Karan Suthar", role: "Game UI Developer", image: "/karan.png" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-3 sm:mb-4 border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 z-20">
                    <h3 className="text-base sm:text-2xl font-bold text-white mb-0 sm:mb-1">{member.name}</h3>
                    <p className="text-primary text-xs sm:text-sm font-mono">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <Button
              asChild
              variant="outline"
              className="bg-transparent border border-primary/50 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              <Link href="/team">
                Meet The Whole Team
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
