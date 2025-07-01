'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  GraduationCap, 
  BookOpen,
  Calendar,
  FileText,
  BarChart3,
  Shield,
  Mail,
  CreditCard,
  MessageSquare,
  Award
} from 'lucide-react';

const portalFeatures = {
  admin: [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student lifecycle management with enrollment, transfers, and records.",
      color: "bg-blue-500"
    },
    {
      icon: GraduationCap,
      title: "Staff Management", 
      description: "Comprehensive staff profiles, role management, and performance tracking.",
      color: "bg-green-500"
    },
    {
      icon: Calendar,
      title: "Timetable Management",
      description: "Smart scheduling with conflict detection and automated optimizations.",
      color: "bg-purple-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into academic performance and institutional metrics.",
      color: "bg-orange-500"
    },
    {
      icon: CreditCard,
      title: "Fee Management",
      description: "Automated fee collection, receipts, and financial reporting.",
      color: "bg-emerald-500"
    },
    {
      icon: Shield,
      title: "Security & Access",
      description: "Role-based access control and comprehensive audit trails.",
      color: "bg-red-500"
    }
  ],
  teacher: [
    {
      icon: BookOpen,
      title: "Class Management",
      description: "Organize classes, subjects, and student groups effortlessly.",
      color: "bg-indigo-500"
    },
    {
      icon: FileText,
      title: "Gradebook",
      description: "Digital gradebook with automatic calculations and grade analytics.",
      color: "bg-teal-500"
    },
    {
      icon: Calendar,
      title: "Lesson Planning",
      description: "Interactive lesson plans with curriculum alignment and resources.",
      color: "bg-pink-500"
    },
    {
      icon: BarChart3,
      title: "Student Analytics",
      description: "Track individual student progress and identify learning gaps.",
      color: "bg-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Direct messaging with students and parents with automated notifications.",
      color: "bg-violet-500"
    },
    {
      icon: Award,
      title: "Assessment Tools",
      description: "Create and grade digital assessments with instant feedback.",
      color: "bg-amber-500"
    }
  ],
  parent: [
    {
      icon: BarChart3,
      title: "Student Progress",
      description: "Real-time view of your child's academic performance and growth.",
      color: "bg-blue-500"
    },
    {
      icon: Calendar,
      title: "School Calendar",
      description: "Stay updated with school events, holidays, and important dates.",
      color: "bg-green-500"
    },
    {
      icon: MessageSquare,
      title: "Teacher Communication",
      description: "Direct communication channel with teachers and school staff.",
      color: "bg-purple-500"
    },
    {
      icon: CreditCard,
      title: "Fee Payments",
      description: "Convenient online fee payment with payment history and receipts.",
      color: "bg-orange-500"
    },
    {
      icon: FileText,
      title: "Report Cards",
      description: "Digital report cards and academic documents at your fingertips.",
      color: "bg-emerald-500"
    },
    {
      icon: Mail,
      title: "Notifications",
      description: "Instant alerts for attendance, announcements, and important updates.",
      color: "bg-red-500"
    }
  ],
  student: [
    {
      icon: BookOpen,
      title: "Course Materials",
      description: "Access all your study materials, assignments, and resources online.",
      color: "bg-indigo-500"
    },
    {
      icon: Calendar,
      title: "Class Schedule",
      description: "View your timetable, upcoming classes, and exam schedules.",
      color: "bg-teal-500"
    },
    {
      icon: BarChart3,
      title: "Grade Tracking",
      description: "Monitor your academic progress and performance analytics.",
      color: "bg-pink-500"
    },
    {
      icon: FileText,
      title: "Assignment Submission",
      description: "Submit assignments digitally with plagiarism detection.",
      color: "bg-cyan-500"
    },
    {
      icon: MessageSquare,
      title: "Peer Collaboration",
      description: "Connect with classmates through discussion forums and group projects.",
      color: "bg-violet-500"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Track your certificates, badges, and academic achievements.",
      color: "bg-amber-500"
    }
  ]
};

export function PortalShowcase() {
  return (
    <section id="portals" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Multi-Portal Experience
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Tailored interfaces for every stakeholder in your educational ecosystem
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-8 sm:mb-12 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 gap-2 p-2 h-auto rounded-xl">
              <TabsTrigger value="admin" className="text-sm sm:text-base lg:text-lg font-semibold px-3 sm:px-4 py-3 sm:py-3 h-auto data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg border border-transparent data-[state=active]:border-purple-600 bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-600/50 transition-all duration-200">
                Admin
              </TabsTrigger>
              <TabsTrigger value="teacher" className="text-sm sm:text-base lg:text-lg font-semibold px-3 sm:px-4 py-3 sm:py-3 h-auto data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg border border-transparent data-[state=active]:border-purple-600 bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-600/50 transition-all duration-200">
                Teacher
              </TabsTrigger>
              <TabsTrigger value="parent" className="text-sm sm:text-base lg:text-lg font-semibold px-3 sm:px-4 py-3 sm:py-3 h-auto data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg border border-transparent data-[state=active]:border-purple-600 bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-600/50 transition-all duration-200">
                Parent
              </TabsTrigger>
              <TabsTrigger value="student" className="text-sm sm:text-base lg:text-lg font-semibold px-3 sm:px-4 py-3 sm:py-3 h-auto data-[state=active]:bg-purple-600 data-[state=active]:text-white rounded-lg border border-transparent data-[state=active]:border-purple-600 bg-white/50 dark:bg-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-600/50 transition-all duration-200">
                Student
              </TabsTrigger>
            </TabsList>

            {Object.entries(portalFeatures).map(([portal, features]) => (
              <TabsContent key={portal} value={portal}>
                <AnimatePresence mode="wait">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  >
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group"
                      >
                        <Card className="h-full glass backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4 sm:p-6">
                            <div className="flex items-center mb-3 sm:mb-4">
                              <div className={`p-2 sm:p-3 rounded-lg ${feature.color} mr-3 sm:mr-4 flex-shrink-0`}>
                                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors leading-tight">
                                  {feature.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Portal benefits badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <Badge variant="secondary" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white leading-relaxed inline-block">
            <span className="block xs:inline">One Platform</span>
            <span className="hidden xs:inline text-purple-200"> • </span>
            <span className="block xs:inline">Four Tailored Experiences</span>
            <span className="hidden xs:inline text-purple-200"> • </span>
            <span className="block xs:inline">Infinite Possibilities</span>
          </Badge>
        </motion.div>
      </div>
    </section>
  );
} 