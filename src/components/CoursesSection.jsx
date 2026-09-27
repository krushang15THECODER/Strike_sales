import React from 'react';
import { Clock, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 'thunder',
    title: 'Thunder 100 Days of Code',
    description: 'Web Development + System Design + Security + DevOps',
    duration: '100 Days',
    image: '/thunder.png',
    isLive: true,
  },
  {
    id: 'devops',
    title: 'DevOps Full Course',
    description: 'Linux + CI/CD + Docker + Kubernetes + Terraform + Cloud',
    duration: '8 weeks',
    image: '/devops.png',
    isLive: true,
  },
  {
    id: 'dsa-genai',
    title: 'DSA + GenAI Combo',
    description: 'Complete tech stack with DSA and AI',
    duration: '4 months',
    image: '/dsa.png', 
    isLive: true,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function CoursesSection() {
  return (
    <section id="courses" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-800/80">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
          What We Offer
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our comprehensive courses designed to elevate your skills
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {courses.map((course) => (
          <motion.div 
            key={course.id}
            variants={itemVariants}
            className="group flex flex-col bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 shadow-lg"
          >
            {/* Image Header */}
            <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black shrink-0">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* LIVE Badge */}
              {course.isLive && (
                <div className="absolute top-4 left-4 z-10 bg-[#dc2626] text-white px-2.5 py-1 rounded-[4px] flex items-center gap-1.5 text-[10px] font-bold tracking-wider shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  LIVE
                </div>
              )}

              {/* Inner subtle gradient to blend bottom of image */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <p className="text-[13px] text-gray-300 leading-relaxed font-medium mb-5 px-2">
                {course.description}
              </p>
              
              <div className="mt-auto flex flex-col items-center w-full">
                {/* Duration Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-900/80 border border-gray-800 text-gray-400 text-xs font-medium mb-6">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </div>

                {/* Explore Link */}
                <a href="#" className="text-gray-400 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-1 group-hover:gap-2 duration-300">
                  Explore Course <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
