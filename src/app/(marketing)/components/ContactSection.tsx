'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Calendar, Clock, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  school: z.string().min(2, 'School name must be at least 2 characters'),
  role: z.string().min(2, 'Please specify your role'),
  studentCount: z.string().min(1, 'Please specify student count'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const scheduleFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  notes: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;
type ScheduleFormData = z.infer<typeof scheduleFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      school: '',
      role: '',
      studentCount: '',
      message: '',
    },
  });

  const scheduleForm = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      notes: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Contact form submitted:', data);
      toast.success('Thank you! Our team will contact you within 24 hours to discuss your requirements.');
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  const onScheduleSubmit = async (data: ScheduleFormData) => {
    setIsScheduling(true);
    
    setTimeout(() => {
      console.log('Schedule form submitted:', { ...data, date: selectedDate, time: selectedTime });
      toast.success('Demo scheduled successfully! You will receive a confirmation email shortly.');
      scheduleForm.reset();
      setSelectedDate('');
      setSelectedTime('');
      setIsScheduling(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      content: 'info@verixence.com',
      description: 'Get detailed responses within 24 hours'
    },
    {
      icon: Calendar,
      title: 'Schedule Demo',
      content: 'Book a Call',
      description: 'Personalized 30-minute demo session'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      content: '< 24 hours',
      description: 'Average response time for all inquiries'
    },
    {
      icon: MessageSquare,
      title: 'Expert Consultation',
      content: 'Free Consultation',
      description: 'Discuss your specific school needs'
    }
  ];

  const studentCountOptions = [
    'Less than 100 students',
    '100-500 students', 
    '500-1000 students',
    '1000-2000 students',
    'More than 2000 students'
  ];

  const roleOptions = [
    'Principal/Director',
    'Vice Principal',
    'Administrator',
    'IT Manager',
    'Finance Manager',
    'Other'
  ];

  // Generate available dates (next 30 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Exclude weekends
        dates.push(date);
      }
    }
    return dates;
  };

  // Generate available time slots
  const getAvailableTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (const minute of [0, 30]) {
        if (hour === 17 && minute === 30) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots.push({ value: time, display: displayTime });
      }
    }
    return slots;
  };

  const availableDates = getAvailableDates();
  const availableTimeSlots = getAvailableTimeSlots();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contact our education specialists for a personalized demo and see how Campushoster can transform your school
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <Card className="glass backdrop-blur-sm border-white/20 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-medium text-purple-600 dark:text-purple-400 mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass backdrop-blur-sm border-white/20 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Get a Personalized Demo
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Share your requirements and we&apos;ll schedule a customized demonstration for your school.
                </p>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@school.edu" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="school"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>School/Institution Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Lincoln Elementary School" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Role *</FormLabel>
                            <FormControl>
                              <select 
                                {...field} 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              >
                                <option value="">Select your role</option>
                                {roleOptions.map((role) => (
                                  <option key={role} value={role}>{role}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="studentCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Students *</FormLabel>
                          <FormControl>
                            <select 
                              {...field} 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              <option value="">Select student count</option>
                              {studentCountOptions.map((count) => (
                                <option key={count} value={count}>{count}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tell us about your requirements</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What specific challenges are you looking to solve? What features are most important to you?"
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg h-12"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Demo & Consultation'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Modern Schedule Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass backdrop-blur-sm border-white/20 shadow-xl h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Schedule Instant Demo
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300">
                  Book a convenient 30-minute slot with our education specialists. See Campushoster in action!
                </p>
                <div className="flex items-center space-x-4 text-sm text-purple-600 dark:text-purple-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Mon-Fri 9AM-5PM</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...scheduleForm}>
                  <form onSubmit={scheduleForm.handleSubmit(onScheduleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={scheduleForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={scheduleForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="john@school.edu" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={scheduleForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Date Selection */}
                    <div>
                      <FormLabel>Select Date *</FormLabel>
                      <div className="mt-2 grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                        {availableDates.slice(0, 15).map((date, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => {
                              const dateStr = date.toISOString().split('T')[0];
                              setSelectedDate(dateStr);
                              scheduleForm.setValue('date', dateStr);
                            }}
                            className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                              selectedDate === date.toISOString().split('T')[0]
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-white border-gray-300 hover:border-purple-400 text-gray-700'
                            }`}
                          >
                            {formatDate(date)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <div>
                        <FormLabel>Select Time *</FormLabel>
                        <div className="mt-2 grid grid-cols-4 gap-2 max-h-32 overflow-y-auto">
                          {availableTimeSlots.slice(0, 12).map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => {
                                setSelectedTime(slot.value);
                                scheduleForm.setValue('time', slot.value);
                              }}
                              className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                                selectedTime === slot.value
                                  ? 'bg-purple-600 text-white border-purple-600'
                                  : 'bg-white border-gray-300 hover:border-purple-400 text-gray-700'
                              }`}
                            >
                              {slot.display}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <FormField
                      control={scheduleForm.control}
                      name="notes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Notes (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific topics you'd like to discuss?"
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isScheduling || !selectedDate || !selectedTime}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg h-12"
                    >
                      {isScheduling ? 'Scheduling...' : 'Schedule Demo'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Join 500+ Schools Transforming Education
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                See why educational institutions across India trust Campushoster for their complete school management needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('#demo')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
                >
                  Get Started Today
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-700 dark:text-purple-400 dark:hover:bg-purple-900/20"
                >
                  Watch Demo Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
} 