'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    value: 10000,
    suffix: '+',
    label: 'Students Managed',
    description: 'Across multiple institutions'
  },
  {
    value: 99.98,
    suffix: '%',
    label: 'Uptime Guaranteed',
    description: 'Reliable cloud infrastructure'
  },
  {
    value: 500,
    suffix: '+',
    label: 'Schools Trust Us',
    description: 'Educational institutions worldwide'
  },
  {
    value: 15,
    suffix: ' hrs',
    label: 'Time Saved Weekly',
    description: 'Per administrative staff'
  }
];

function AnimatedCounter({ value, duration = 2000, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const startValue = 0;
    const endValue = value;

    const updateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = startValue + (endValue - startValue) * easedProgress;
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  const formatValue = (num: number) => {
    if (suffix === '%') {
      return num.toFixed(2);
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return Math.floor(num).toString();
  };

  return (
    <span ref={countRef} className="tabular-nums">
      {formatValue(count)}{suffix}
    </span>
  );
}

export function ValueStats() {
  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of schools that have transformed their operations with Campushoster
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-dark rounded-2xl p-8 h-full"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400">
                  {stat.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-8">Trusted by leading educational institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for school/institution logos */}
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <div className="text-white/60 font-semibold">School {i + 1}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-float" />
        <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-pink-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '6s' }} />
      </div>
    </section>
  );
} 