import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  problemStatement: string;
  methodology: string;
  results: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  problemStatement,
  methodology,
  results
}: ProjectCardProps) {
  const categoryColor = (() => {
    switch(category) {
      case 'UX Research':
        return 'bg-primary';
      case 'Lead Generation':
        return 'bg-purple-600'; // accent
      case 'Data Analysis':
        return 'bg-sky-600'; // secondary
      default:
        return 'bg-primary';
    }
  })();
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className={`absolute top-4 right-4 ${categoryColor} text-white text-xs px-3 py-1 rounded-full`}>
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Problem Statement</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{problemStatement}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Methodology</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{methodology}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Key Results</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{results}</p>
        </div>
        
        <a href="#" className="inline-block mt-4 text-primary hover:text-blue-700 font-medium">
          View Case Study <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </motion.div>
  );
}
