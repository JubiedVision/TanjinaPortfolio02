import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '@/lib/constants';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Education & <span className="text-primary">Certifications</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-4 rounded-lg mr-4">
                <i className="fas fa-graduation-cap text-primary text-2xl"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold font-inter dark:text-white">{EDUCATION_DATA.university.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{EDUCATION_DATA.university.degree}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-white">Specialization</span>
                <span className="text-primary">{EDUCATION_DATA.university.specialization}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-white">Graduation Year</span>
                <span className="text-gray-600 dark:text-gray-300">{EDUCATION_DATA.university.graduationYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium dark:text-white">Academic Standing</span>
                <span className="text-gray-600 dark:text-gray-300">{EDUCATION_DATA.university.academicStanding}</span>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold mb-4 dark:text-white">Academic Achievements</h4>
            
            <ul className="space-y-3">
              {EDUCATION_DATA.university.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <i className="fas fa-award text-primary mt-1 mr-3"></i>
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Professional Certifications</h3>
            
            <div className="space-y-6">
              {EDUCATION_DATA.certifications.map((certification, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mr-4">
                      <i className="fas fa-certificate text-primary"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">{certification.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{certification.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Issued {certification.year}</span>
                    <span className="text-xs ml-3 text-gray-500 dark:text-gray-400">Credential ID: {certification.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
