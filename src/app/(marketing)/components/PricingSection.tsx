'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small schools getting started",
    price: "₹4,999",
    period: "per month",
    icon: Star,
    color: "from-blue-500 to-cyan-500",
    badge: null,
    features: [
      "Up to 200 students",
      "Basic portal access",
      "Student & staff management",
      "Basic reports",
      "Email support",
      "Mobile app access"
    ],
    cta: "Get Started"
  },
  {
    name: "Growth",
    description: "For growing institutions with advanced needs",
    price: "₹12,999",
    period: "per month",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    badge: "Most Popular",
    features: [
      "Up to 1,000 students",
      "All portal features",
      "Advanced analytics",
      "Custom reports",
      "Fee management",
      "Parent communication",
      "Priority support",
      "API access"
    ],
    cta: "Get Started"
  },
  {
    name: "Enterprise",
    description: "For large institutions requiring custom solutions",
    price: "Custom",
    period: "contact us",
    icon: Crown,
    color: "from-orange-500 to-red-500",
    badge: "Best Value",
    features: [
      "Unlimited students",
      "Full platform access",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "Advanced security",
      "Training & onboarding",
      "SLA guarantee"
    ],
    cta: "Contact Sales"
  }
];

export function PricingSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your school&apos;s needs. All plans include core features with no hidden fees.
          </p>
          <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
            Professional setup • Dedicated support • Flexible billing
          </Badge>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative group ${plan.badge ? 'md:-mt-8' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <Card className={`h-full glass backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300 ${
                plan.badge ? 'border-purple-200 dark:border-purple-700 shadow-xl' : ''
              }`}>
                <CardHeader className="text-center p-8 pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  {/* Price display removed as requested */}
                  {/* <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /{plan.period}
                      </span>
                    )}
                    {plan.price === "Custom" && (
                      <span className="text-gray-600 dark:text-gray-300 ml-2 text-lg">
                        {plan.period}
                      </span>
                    )}
                  </div> */}
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => scrollToSection('#demo')}
                    className={`w-full font-semibold text-lg h-12 ${
                      plan.badge
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                        : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  {plan.name === "Enterprise" && (
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Custom implementation • Dedicated account manager
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional pricing info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Professional Setup
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Complete implementation and data migration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Quick Deployment
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get started within 48 hours with expert guidance
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Priority support team available when you need help
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 