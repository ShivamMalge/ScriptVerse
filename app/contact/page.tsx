"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Linkedin, Instagram } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const templateParams = {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
      message: formState.message,
      time: new Date().toLocaleString(),
    }

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setTimeout(() => setIsSubmitted(false), 5000)
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        setIsSubmitting(false)
        alert("Something went wrong. Please try again later.")
      })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-black tech-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,170,0.15),transparent_70%)]"></div>
        <div className="container px-4 mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto bg-black/50 p-4 border border-primary/30 font-mono">
              Let's collaborate on something extraordinary
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Full Width */}
      <section className="w-full py-16 bg-black circuit-pattern">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Contact Information
                </span>
              </h2>
              <p className="text-gray-300 mb-8 font-mono text-sm">
                Ready to start your next project or have questions about our services? Reach out to us through any of
                these channels or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail className="h-6 w-6" />, title: "Email", content: "scriptverse8@gmail.com" },
                { icon: <Phone className="h-6 w-6" />, title: "Phone", content: "Coming Soon" },
                { icon: <MapPin className="h-6 w-6" />, title: "Location", content: "Hebbal, Bengaluru" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary text-black">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 font-mono text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold text-white mb-4 tracking-tighter">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
                  { icon: <Instagram className="h-5 w-5" />, url: "#", label: "Instagram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center w-12 h-12 bg-black/50 border border-white/10 text-white hover:bg-black/70 hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-1 bg-gradient-to-r from-primary to-secondary">
              <div className="bg-black p-8">
                <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/20 border border-primary/50 p-6 text-center"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300 font-mono text-sm">
                      Thanks for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300 font-mono">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 font-mono">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300 font-mono">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Inquiry"
                        className="bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300 font-mono">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project..."
                        className="min-h-[150px] bg-black/50 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary font-mono"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/80 text-black border-0 py-6 text-lg font-bold transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
