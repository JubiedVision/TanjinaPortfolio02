import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  image: string;
  isActive: boolean;
}

export default function TestimonialCard({
  quote,
  name,
  position,
  image,
  isActive
}: TestimonialCardProps) {
  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="testimonial-item"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative w-20 h-20 mb-6">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-700" 
          />
          <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
        
        <blockquote className="text-lg md:text-xl italic mb-6 text-gray-700 dark:text-gray-300">
          "{quote}"
        </blockquote>
        
        <div>
          <h4 className="font-semibold text-lg dark:text-white">{name}</h4>
          <p className="text-gray-500 dark:text-gray-400">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
