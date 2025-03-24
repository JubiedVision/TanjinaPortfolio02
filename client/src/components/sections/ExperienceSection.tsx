import { EXPERIENCE_DATA } from '@/lib/constants';
import TimelineItem from '@/components/ui/timeline-item';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4 text-gray-900 dark:text-white">Professional <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        </div>
        
        <div className="relative timeline-container pl-8 md:pl-0">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/3 w-0.5 h-full bg-primary top-0 transform -translate-x-1/2"></div>
          <div className="md:hidden absolute left-0 w-0.5 h-full bg-primary top-0 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          {EXPERIENCE_DATA.map((experience, index) => (
            <TimelineItem 
              key={index}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              current={experience.current}
              responsibilities={experience.responsibilities}
              achievements={experience.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
