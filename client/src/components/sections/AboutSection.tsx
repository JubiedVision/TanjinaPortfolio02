import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4 font-inter text-gray-900 dark:text-white">My Background</h3>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              As a dedicated UX Researcher and Lead Generator at Upleadsbd, I'm passionate about understanding user behavior and translating insights into actionable strategies. With a background in research methodologies and data analysis, I help businesses connect with their users in meaningful ways.
            </p>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              A graduate from the University of Dhaka, I combine academic knowledge with practical experience to deliver comprehensive research solutions that drive product development and business growth.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 mt-10 font-inter text-gray-900 dark:text-white">My Philosophy</h3>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              I believe that effective UX research is built on empathy, curiosity, and methodical analysis. By putting users at the center of every research initiative, I uncover insights that lead to more intuitive, efficient, and enjoyable product experiences.
            </p>
            
            <div className="mt-10">
              <Button 
                variant="link" 
                className="text-primary hover:text-blue-700 font-medium flex items-center gap-2"
                asChild
              >
                <a href="#" download>
                  <span>Download Resume</span>
                  <i className="fas fa-download"></i>
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Professional Goals</h3>
              
              <div className="flex items-start mb-6">
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">Research Innovation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Develop and refine research methodologies that yield deeper insights and more actionable results.</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-sky-600 p-3 rounded-full text-white mr-4">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">Team Leadership</h4>
                  <p className="text-gray-600 dark:text-gray-300">Mentor and lead research teams to foster collaboration and excellence in research practices.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-full text-white mr-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 dark:text-white">Business Impact</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bridge the gap between user needs and business objectives to drive measurable growth and success.</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mt-10 mb-6 font-inter text-gray-900 dark:text-white">Core Values</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <div className="text-primary mb-2"><i className="fas fa-microscope text-xl"></i></div>
                  <h4 className="font-medium dark:text-white">Research Integrity</h4>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <div className="text-primary mb-2"><i className="fas fa-lightbulb text-xl"></i></div>
                  <h4 className="font-medium dark:text-white">Innovative Thinking</h4>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <div className="text-primary mb-2"><i className="fas fa-hands-helping text-xl"></i></div>
                  <h4 className="font-medium dark:text-white">Collaboration</h4>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <div className="text-primary mb-2"><i className="fas fa-heart text-xl"></i></div>
                  <h4 className="font-medium dark:text-white">User Empathy</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
