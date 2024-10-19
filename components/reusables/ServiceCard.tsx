"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg h-64"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className={`transition-all duration-300 brightness-75 ${isHovered ? 'grayscale brightness-50' : ''}`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <h3 className="text-xl font-semibold text-white mb-2 ">{title}</h3>
        <motion.p 
          className="text-white text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}