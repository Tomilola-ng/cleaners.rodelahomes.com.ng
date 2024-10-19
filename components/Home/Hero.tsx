"use client";

import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHATSAPP_ICON } from "@/lib/icons";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="maxContainer pSm min-h-screen flex flex-col items-center justify-center lg:flex-row"
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full lg:w-1/2 lg:items-start space-y-6 p-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <Badge variant="default">Professional Cleaning Service Company</Badge>
        </motion.div>
        <motion.h1
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left leading-tight"
          variants={itemVariants}
        >
          Trusted and Reliable Professional Cleaning Services in Lagos, Nigeria
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-muted-foreground text-center lg:text-left mb-8"
          variants={itemVariants}
        >
          Rodela Cleaners is the best cleaning company in Nigeria. We provide
          professional cleaning services to your homes and businesses. With over
          4 years of experience, we excel in cleaning and maintaining your
          property.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="https://wa.me/+2348060900713"
            className={`${buttonVariants({ size: "lg" })} flex gap-x-2`}
          >
            Book Now <WHATSAPP_ICON />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] mt-8 lg:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/cleaner.webp"
          alt="Professional cleaner at work"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
      </motion.div>
    </section>
  );
}
