import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  achievements?: {
    title: string;
    description: string;
  }[];
}

export default function TimelineItem({
  title,
  company,
  period,
  current,
  responsibilities,
  achievements
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({ elementRef: ref });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col md:flex-row md:items-center mb-16"
    >
      <div className="md:w-1/3 mb-6 md:mb-0 md:pr-12 md:text-right">
        <div className={`hidden md:block absolute left-1/3 w-4 h-4 ${current ? 'bg-primary' : 'bg-gray-400 dark:bg-gray-600'} rounded-full transform -translate-x-1/2`}></div>
        <div className={`md:hidden absolute left-0 w-4 h-4 ${current ? 'bg-primary' : 'bg-gray-400 dark:bg-gray-600'} rounded-full transform -translate-x-1/2`}></div>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        <p className={current ? "text-primary font-medium" : "text-gray-600 dark:text-gray-400"}>{company}</p>
        <p className="text-gray-500 dark:text-gray-400">{period}</p>
      </div>
      
      <div className="md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-semibold mb-4 dark:text-white">Key Responsibilities</h4>
        
        <ul className="space-y-3 mb-6">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start">
              <i className={`fas fa-check-circle ${current ? 'text-primary' : 'text-gray-400 dark:text-gray-500'} mt-1 mr-3`}></i>
              <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
            </li>
          ))}
        </ul>
        
        {achievements && achievements.length > 0 && (
          <>
            <h4 className="text-lg font-semibold mb-4 dark:text-white">Key Achievements</h4>
            
            <div className="flex flex-col md:flex-row gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex-1 bg-blue-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-trophy text-amber-500 mr-2"></i>
                    <h5 className="font-medium dark:text-white">{achievement.title}</h5>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
