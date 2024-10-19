"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Chioma Okafor",
    location: "Lekki, Lagos",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Rodela Cleaners transformed my home after our last-minute owambe. Their team arrived promptly and left my house sparkling clean. Highly recommended!"
  },
  {
    name: "Oluwaseun Adebayo",
    location: "Victoria Island, Lagos",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As a busy executive, I needed a reliable cleaning service for my office. Rodela Cleaners has been exceptional, always delivering top-notch results. They understand the importance of a clean workspace in Lagos' corporate world."
  },
  {
    name: "Ngozi Eze",
    location: "Ikeja GRA, Lagos",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "I was skeptical about hiring a cleaning service, but Rodela Cleaners exceeded my expectations. They handled the post-construction cleaning of my new home with professionalism. The attention to detail was impressive!"
  },
  {
    name: "Emeka Okonkwo",
    location: "Ikoyi, Lagos",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Rodela Cleaners has been maintaining our hotel for over a year now. Their consistency and quality of service are unmatched. They understand the unique challenges of cleaning in Lagos and always rise to the occasion."
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-background shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="h-16 w-16 mr-4">
                      <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                      <AvatarFallback>{testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic">&ldquo;{testimonials[currentIndex].text}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}