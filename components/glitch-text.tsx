"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlitchTextProps {
  children: React.ReactNode
  className?: string
}

export function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isHovered) {
      setIsAnimating(true)
      const timeout = setTimeout(() => {
        setIsAnimating(false)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [isHovered])

  return (
    <motion.h1
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isAnimating && (
        <>
          <motion.span
            className="absolute top-0 left-0 w-full text-red-500 opacity-70 mix-blend-screen"
            animate={{
              x: [0, -5, 3, -2, 0],
              y: [0, 2, -1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 1,
              repeatType: "reverse",
            }}
            aria-hidden="true"
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 w-full text-blue-500 opacity-70 mix-blend-screen"
            animate={{
              x: [0, 5, -3, 2, 0],
              y: [0, -2, 1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 1,
              repeatType: "reverse",
            }}
            aria-hidden="true"
          >
            {children}
          </motion.span>
        </>
      )}
      <span className={isAnimating ? "invisible" : ""}>{children}</span>
    </motion.h1>
  )
}
