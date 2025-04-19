"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Code, Gamepad2, FileSearch, Layers, Smartphone, Database, BrainCircuit, Palette, Gauge } from "lucide-react"
import Head from "next/head"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("web")

  const services = {
    web: {
      title: "Web Development",
      description:
        "We craft cutting-edge web experiences that push the boundaries of what's possible online. Our team specializes in creating performant, accessible, and visually stunning websites and web applications.",
      features: [
        {
          icon: <Code className="h-5 w-5" />,
          title: "Frontend Development",
          description: "React, Vue, and Next.js applications with stunning UI/UX",
        },
        {
          icon: <Database className="h-5 w-5" />,
          title: "Backend Systems",
          description: "Scalable APIs and server architectures",
        },
        {
          icon: <Smartphone className="h-5 w-5" />,
          title: "Responsive Design",
          description: "Seamless experiences across all devices",
        },
      ],
      color: "from-primary to-primary/70",
    },
    game: {
      title: "Game-based UIs",
      description:
        "Transform mundane digital experiences into immersive adventures with our Pygame-powered interfaces. We create interactive UIs that engage users through gamification and playful interactions.",
      features: [
        {
          icon: <Gamepad2 className="h-5 w-5" />,
          title: "Pygame Development",
          description: "Custom game engines and interactive elements",
        },
        {
          icon: <Gauge className="h-5 w-5" />,
          title: "Performance Optimization",
          description: "Smooth animations and interactions",
        },
        {
          icon: <Palette className="h-5 w-5" />,
          title: "Visual Effects",
          description: "Particle systems and dynamic animations",
        },
      ],
      color: "from-secondary to-secondary/70",
    },
    ats: {
      title: "Custom ATS Tools",
      description:
        "Streamline your hiring process with our bespoke Applicant Tracking Systems. We build custom tools that leverage AI and automation to help you find the perfect candidates efficiently.",
      features: [
        {
          icon: <FileSearch className="h-5 w-5" />,
          title: "Resume Parsing",
          description: "AI-powered candidate screening and matching",
        },
        {
          icon: <Layers className="h-5 w-5" />,
          title: "Workflow Automation",
          description: "Custom pipelines for your hiring process",
        },
        {
          icon: <BrainCircuit className="h-5 w-5" />,
          title: "Analytics Dashboard",
          description: "Data-driven insights for better hiring decisions",
        },
      ],
      color: "from-accent to-accent/70",
    },
  }

  const activeService = services[activeTab as keyof typeof services]

  return (
    <>
      <Head>
        <title>Services | ScriptVerse - Creative Tech Team</title>
        <meta
          name="description"
          content="Explore our cutting-edge services including web development, game-based UIs, and custom ATS tools."
        />
        <meta name="keywords" content="web development, game UI, applicant tracking system, digital services" />
      </Head>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 flex items-center justify-center overflow-hidden bg-black tech-pattern">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>

          <div className="container px-4 mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                OUR <span className="text-primary">SERVICES</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
                Cutting-edge solutions for the digital frontier
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="w-full px-4 mx-auto py-16 bg-black circuit-pattern">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(services).map(([key, service]) => (
              <Button
                key={key}
                onClick={() => setActiveTab(key)}
                variant={activeTab === key ? "default" : "outline"}
                className={`
                  px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300
                  ${
                    activeTab === key
                      ? `bg-gradient-to-r ${service.color} text-black border-0`
                      : "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-primary/50"
                  }
                `}
              >
                {service.title}
              </Button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className={`p-1 bg-gradient-to-r ${activeService.color}`}>
              <div className="bg-black p-6 sm:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 tracking-tighter">
                  {activeService.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 font-mono">{activeService.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/50 border border-white/10 p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 bg-gradient-to-br ${activeService.color} text-black`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300 font-mono text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="w-full px-4 mx-auto py-24 bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              How we transform your ideas into digital reality
            </p>
          </motion.div>

          {/* Mobile Process View */}
          <div className="md:hidden space-y-6">
            {[
              {
                title: "Discovery",
                description:
                  "We dive deep into your vision, goals, and requirements to understand the full scope of your project.",
              },
              {
                title: "Strategy",
                description:
                  "Our team develops a comprehensive roadmap tailored to your specific needs and objectives.",
              },
              {
                title: "Design",
                description: "We create stunning visual concepts and prototypes that bring your ideas to life.",
              },
              {
                title: "Development",
                description: "Our engineers build your solution using cutting-edge technologies and best practices.",
              },
              {
                title: "Testing",
                description:
                  "Rigorous quality assurance ensures your product performs flawlessly across all platforms.",
              },
              {
                title: "Launch",
                description: "We deploy your solution and provide ongoing support to ensure continued success.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 border border-white/10 p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_rgba(0,255,170,0.5)] flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white ml-3">{step.title}</h3>
                </div>
                <p className="text-gray-300 font-mono text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Desktop Process View */}
          <div className="relative max-w-4xl mx-auto hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>

            {[
              {
                title: "Discovery",
                description:
                  "We dive deep into your vision, goals, and requirements to understand the full scope of your project.",
              },
              {
                title: "Strategy",
                description:
                  "Our team develops a comprehensive roadmap tailored to your specific needs and objectives.",
              },
              {
                title: "Design",
                description: "We create stunning visual concepts and prototypes that bring your ideas to life.",
              },
              {
                title: "Development",
                description: "Our engineers build your solution using cutting-edge technologies and best practices.",
              },
              {
                title: "Testing",
                description:
                  "Rigorous quality assurance ensures your product performs flawlessly across all platforms.",
              },
              {
                title: "Launch",
                description: "We deploy your solution and provide ongoing support to ensure continued success.",
              },
            ].map((step, index) => (
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
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-300 font-mono text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
