import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '@/components/ui/testimonial-card';
import { TESTIMONIALS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };
  
  const goToSpecific = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Client <span className="text-primary">Testimonials</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl">
          <motion.div
            className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              {TESTIMONIALS.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  position={testimonial.position}
                  image={testimonial.image}
                  isActive={index === currentIndex}
                />
              ))}
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-primary" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-primary" />
            </Button>
          </motion.div>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => goToSpecific(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
