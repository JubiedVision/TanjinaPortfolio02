import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/project-card';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function PortfolioSection() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(project => project.category.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Project <span className="text-primary">Portfolio</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my research projects showcasing methodologies, findings, and impact.
          </p>
        </div>
        
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full ${filter === 'ux' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('ux')}
          >
            UX Research
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full ${filter === 'lead' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('lead')}
          >
            Lead Generation
          </Button>
          <Button 
            className={`px-6 py-2 rounded-full ${filter === 'data' ? 'bg-primary text-white' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
            onClick={() => setFilter('data')}
          >
            Data Analysis
          </Button>
        </div>
        
        {/* Portfolio Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              problemStatement={project.problemStatement}
              methodology={project.methodology}
              results={project.results}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
