'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  ExternalLink
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter signup:', email);
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    }
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/campushoster', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/campushoster', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/campushoster', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/campushoster', label: 'LinkedIn' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <span className="text-2xl font-bold">Campushoster</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl">
                Transform your educational institution with our comprehensive School ERP solution. 
                Streamline operations, enhance communication, and improve learning outcomes. 
                Powered by cutting-edge technology to deliver exceptional results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>info@verixence.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(social.href)}
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Get the latest updates on new features and educational insights delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSignup} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm text-center md:text-left">
            <p>© 2024 Campushoster. All rights reserved. Built with excellence for education.</p>
          </div>
          
          {/* Attribution Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <span>Powered by</span>
              <a 
                href="https://www.verixence.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>@Verixence</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="hidden md:block">•</span>
            <div className="flex items-center space-x-1">
              <span>Marketed by</span>
              <a 
                href="https://www.digimindsglobal.tech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center space-x-1"
              >
                <span>@DigiMindsGlobal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-xs">
            Campushoster is a comprehensive School ERP solution designed to streamline educational operations. 
            We help schools manage students, staff, academics, finances, and communication all in one powerful platform.
            Experience the future of education management with Verixence technology.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 