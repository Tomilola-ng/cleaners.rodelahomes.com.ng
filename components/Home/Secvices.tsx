"use client"

import { motion } from 'framer-motion'
import ServiceCard from '@/components/reusables/ServiceCard'
import { Separator } from '../ui/separator'

const services = [
  {
    title: "Post Construction Cleaning",
    description: "Thorough cleaning after construction work, removing debris and dust.",
    image: "/vaccum.webp"
  },
  {
    title: "Sofa Laundry",
    description: "Specialized cleaning for sofas, removing stains and refreshing the fabric.",
    image: "/sofa.webp"
  },
  {
    title: "Carpet/Rug Washing",
    description: "Deep cleaning of carpets and rugs, removing dirt and allergens.",
    image: "/rug.webp"
  },
  {
    title: "Mattress Laundry",
    description: "Thorough cleaning and sanitization of mattresses for better sleep hygiene.",
    image: "/bed.webp"
  },
  {
    title: "Fumigation Services",
    description: "Professional pest control services to eliminate insects and rodents.",
    image: "/fumigation.webp"
  },
  {
    title: "Swimming Pool Cleaning",
    description: "Comprehensive cleaning and maintenance of swimming pools for safe and enjoyable use.",
    image: "/pool.webp"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="maxContainer pSm py-16 min-h-screen">
      <Separator />
      <div className="container mx-auto px-4 pt-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cleaning Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}