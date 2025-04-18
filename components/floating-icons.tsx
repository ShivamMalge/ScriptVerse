"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Code, Gamepad2, FileSearch, Braces, Database, Cpu, Globe, Layers, Palette } from "lucide-react"

export function FloatingIcons() {
  const containerRef = useRef<HTMLDivElement>(null)

  const icons = [
    { Icon: Code, color: "bg-blue-500" },
    { Icon: Gamepad2, color: "bg-purple-500" },
    { Icon: FileSearch, color: "bg-amber-500" },
    { Icon: Braces, color: "bg-green-500" },
    { Icon: Database, color: "bg-red-500" },
    { Icon: Cpu, color: "bg-cyan-500" },
    { Icon: Globe, color: "bg-indigo-500" },
    { Icon: Layers, color: "bg-pink-500" },
    { Icon: Palette, color: "bg-orange-500" },
  ]

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((IconObj, index) => {
        const { Icon, color } = IconObj
        const delay = index * 0.2
        const duration = 15 + Math.random() * 15
        const size = 40 + Math.random() * 20

        const initialX = Math.random() * 100
        const initialY = Math.random() * 100

        return (
          <motion.div
            key={index}
            className={`absolute ${color} rounded-lg p-2 text-white shadow-lg opacity-70`}
            style={{
              width: size,
              height: size,
              x: `${initialX}vw`,
              y: `${initialY}vh`,
            }}
            animate={{
              x: [`${initialX}vw`, `${(initialX + 30) % 100}vw`, `${(initialX + 60) % 100}vw`, `${initialX}vw`],
              y: [`${initialY}vh`, `${(initialY + 40) % 100}vh`, `${(initialY + 20) % 100}vh`, `${initialY}vh`],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        )
      })}
    </div>
  )
}
