'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const mockScreenshots = [
  {
    title: "Smart Timetable",
    description: "AI-powered scheduling with conflict detection",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Grade Analytics",
    description: "Comprehensive performance insights and trends",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Attendance Heatmap",
    description: "Visual attendance patterns and analytics",
    color: "from-green-500 to-emerald-500"
  }
];

const sellingPoints = [
  {
    icon: TrendingUp,
    title: "Boost Academic Performance",
    description: "Data-driven insights help identify learning gaps early and improve student outcomes by up to 35%."
  },
  {
    icon: Clock,
    title: "Save 15+ Hours Weekly",
    description: "Automate administrative tasks and streamline workflows to focus on what matters most - education."
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Connect all stakeholders with real-time communication and transparent progress tracking."
  }
];

export function DemoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockScreenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            See Campushoster in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the power of intelligent school management with real-time data and intuitive interfaces
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Screenshots Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {mockScreenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
                >
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-4">{screenshot.title}</h3>
                    <p className="text-xl opacity-90">{screenshot.description}</p>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-3 bg-white/30 rounded animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {mockScreenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-purple-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right side - Selling Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {sellingPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {index + 1}. {point.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-700">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ready to transform your school?
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Join 150+ schools already using Campushoster to streamline operations and improve outcomes.
                  </p>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    Professional setup • Expert support • Proven results
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 