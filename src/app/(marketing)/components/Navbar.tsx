'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'Portals', href: '#portals' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Demo', href: '#demo' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/95 border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
            }`}>
              Campushoster
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-300 font-medium ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-purple-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => scrollToSection('#demo')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg"
              >
                Book Demo
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-white/80'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-md border-gray-200 dark:bg-gray-900/95 dark:border-gray-700">
                <div className="flex flex-col space-y-6 pt-6">
                  {navigationItems.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-200 font-medium text-lg"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  <Button
                    onClick={() => scrollToSection('#demo')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold w-full"
                  >
                    Book Demo
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.nav>
  );
} 