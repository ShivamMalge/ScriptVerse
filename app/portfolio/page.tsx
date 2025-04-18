"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Code, Gamepad2, FileSearch } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects", icon: null },
  { id: "web", label: "Web Development", icon: <Code className="h-4 w-4" /> },
  { id: "game", label: "Game UIs", icon: <Gamepad2 className="h-4 w-4" /> },
  { id: "ats", label: "ATS Tools", icon: <FileSearch className="h-4 w-4" /> },
]

const projects = [
  {
    id: 1,
    title: "NeuroForge",
    category: "web",
    description: "A futuristic AIxWeb project where user can drag and drop Neural Network Layers to generate a custom model ",
    image: "/Neuro.png",
    tags: ["Next.js", "TensorFlowjs", "AI"],
    link:"https://neuro-forge.vercel.app/",
  },
  {
    id: 2,
    title: "Quantum Mind",
    category: "game",
    description: "An immersive game UI that simulates quantum computing concepts through interactive gameplay.",
    image: "/q.png",
    tags: ["Nexjs", "ThreeJs", "Web"],
    link:"/",
  },
  {
    id: 3,
    title: "Expense Tracker",
    category: "web",
    description: "Expense Tracker tracks your income and expenses with visualization and data export Functionalities",
    image: "/expense.png",
    tags: ["Nextjs", "Node.js", "D3js"],
    link:"https://lavanya-naik426.github.io/Expense-tracker/login",
  },
  {
    id: 4,
    title: "3D Ant-Simulation",
    category: "game",
    description: "A 3D Simulation Game where user can learn the functionality of an Ant Colony and their ecosystem",
    image: "/ant1.png",
    tags: ["ThreeJs", "Vercel", "WebGame"],
    link: "https://ai-ant.vercel.app/",
  },
  {
    id: 5,
    title: "Trends Saloon",
    category: "web",
    description: "We created a website for our client",
    image: "/saloon.png",
    tags: ["Node", "Git", "Dock"],
    link: "https://trends-unisex-salon.vercel.app/",
  },
  {
    id: 6,
    title: "Thrive",
    category: "web",
    description: "We created a no-code website for Thrive-Thrift Store",
    image: "/thrive.png",
    tags: ["Framer", "No-code", "AI"],
    link: "https://thrive-store-clothing.framer.ai/?fbclid=PAZXh0bgNhZW0CMTEAAaeKzSUWwFC1NmGcgcwoOBWhikpUBkmCLsV9o3IdJKIXP6ZJqV4zCv1BtMV0Hg_aem_JZlHv-WBXoQaxgraC25zvw"
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 flex items-center justify-center overflow-hidden bg-black tech-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>

        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              OUR <span className="text-primary">PORTFOLIO</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
              Explore our digital creations from the edge of innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="w-full px-4 mx-auto py-12 sm:py-16 bg-black circuit-pattern">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`
                px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-black border-0"
                    : "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-primary/50"
                }
              `}
            >
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1  max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden aspect-[4/3]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60 z-10 group-hover:opacity-80 transition-opacity duration-300"></div>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-3 sm:mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-mono text-xs sm:text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-black/50 border border-primary/30 px-2 sm:px-3 py-0.5 sm:py-1 text-gray-200 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-transparent border border-primary/30 text-white hover:bg-primary/10 hover:text-white hover:border-primary text-xs sm:text-sm"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        View Project
                      </a>
                  </Button>

                </div>

                <motion.div
                  className="absolute top-4 right-4 z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="bg-black/50 border border-primary/30 text-white hover:bg-black/70 hover:text-primary hover:border-primary/50 h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Project */}
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Featured Project
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              A closer look at our most innovative work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary blur-lg opacity-75"></div>
                <div className="relative bg-black overflow-hidden">
                  <img src="/placeholder.svg?height=600&width=800" alt="Featured project" className="w-full h-auto" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-secondary text-black text-xs sm:text-sm font-bold mb-2 font-mono">
                CASE STUDY
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tighter">Quantum Neural Interface</h3>
              <p className="text-gray-300 font-mono text-sm">
                A groundbreaking project that merges quantum computing principles with neural interface design, creating
                an immersive experience that responds to user thought patterns in real-time.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Quantum Computing", "Neural Interface", "AI", "WebXR"].map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-black/50 border border-primary/30 px-3 py-1 text-gray-200 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-black/50 border border-white/10 p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">The Challenge</h4>
                  <p className="text-gray-300 font-mono text-xs sm:text-sm">
                    Creating a system that could interpret neural signals and translate them into quantum computing
                    operations with minimal latency.
                  </p>
                </div>
                <div className="bg-black/50 border border-white/10 p-3 sm:p-4">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Our Solution</h4>
                  <p className="text-gray-300 font-mono text-xs sm:text-sm">
                    We developed a proprietary algorithm that processes neural signals through a quantum circuit,
                    achieving response times under 10ms.
                  </p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/80 text-black border-0 text-sm sm:text-base">
                View Full Case Study
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-black tech-pattern">
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
                Client Feedback
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "ScriptVerse delivered a web experience that feels like it was sent back from 2045. Our conversion rates increased by 300% within the first month.",
                author: "Alex Chen",
                position: "CEO, NeoTech Industries",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "The game UI they built for us redefined what's possible in browser-based experiences. Users spend twice as long on our platform now.",
                author: "Sarah Quantum",
                position: "Product Lead, GameVerse",
                image: "/placeholder.svg?height=100&width=100",
              },
              {
                quote:
                  "Their custom ATS solution cut our hiring time in half while improving candidate quality. The ROI has been astronomical.",
                author: "Marcus Vector",
                position: "HR Director, Cyber Systems",
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
                  <div className="bg-black p-6 min-h-[280px] sm:min-h-[320px] flex flex-col">
                    <div className="flex-grow">
                      <svg
                        className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-300 mb-4 sm:mb-6 font-mono text-xs sm:text-sm leading-relaxed">
                        {testimonial.quote}
                      </p>
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

          <div className="mt-12 sm:mt-16 text-center">
            <Button
              variant="outline"
              className="bg-transparent border border-primary/50 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-primary/10 hover:border-primary"
            >
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
