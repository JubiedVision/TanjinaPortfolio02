import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-inter leading-tight mb-4 text-gray-900 dark:text-white">
              <span className="text-primary">UX Researcher</span> <br /> & Lead Generator
            </h1>
            <p className="text-lg mb-8 max-w-lg text-gray-600 dark:text-gray-300">
              Specializing in qualitative and quantitative research strategies that transform user insights into meaningful product decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                asChild
              >
                <a href="#portfolio">View Projects</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white dark:text-white font-medium rounded-lg transition-colors"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex mt-10 gap-5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" 
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" 
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="mailto:tanjina@example.com" 
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors" 
                aria-label="Email"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-primary/20 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Tanjina Akter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Available for projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
