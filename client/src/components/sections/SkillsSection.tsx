import { motion } from 'framer-motion';
import SkillBar, { SkillBox, RatingSkill } from '@/components/ui/skill-bar';
import { RESEARCH_SKILLS, SPECIALIZED_SKILLS, PROFESSIONAL_SKILLS } from '@/lib/constants';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Skills & <span className="text-primary">Expertise</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Research Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Research Methods</h3>
            
            <div className="space-y-6">
              {RESEARCH_SKILLS.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-12 mb-6 font-inter text-gray-900 dark:text-white">Specialized Expertise</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {SPECIALIZED_SKILLS.map((skill) => (
                <SkillBox
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 font-inter text-gray-900 dark:text-white">Professional Skills</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {PROFESSIONAL_SKILLS.map((skill) => (
                <RatingSkill
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  description={skill.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
