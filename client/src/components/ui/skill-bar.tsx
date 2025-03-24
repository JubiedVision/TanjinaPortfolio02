import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  className?: string;
}

export default function SkillBar({ name, level, className }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({ elementRef: ref });
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  return (
    <div className={cn('mb-6', className)} ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium dark:text-white">{name}</span>
        <span className="text-primary font-medium">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: isAnimated ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

interface SkillBoxProps {
  name: string;
  level: number;
  icon: string;
  className?: string;
}

export function SkillBox({ name, level, icon, className }: SkillBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({ elementRef: ref });
  const [isAnimated, setIsAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
  }, [isInView, isAnimated]);

  return (
    <div className={cn('bg-gray-50 dark:bg-gray-800 p-4 rounded-lg', className)} ref={ref}>
      <div className="flex items-center mb-2">
        <i className={`fas ${icon} text-primary mr-2`}></i>
        <h4 className="font-medium dark:text-white">{name}</h4>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2">
        <div 
          className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: isAnimated ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
}

interface RatingSkillProps {
  name: string;
  level: number;
  icon: string;
  description: string;
  className?: string;
}

export function RatingSkill({ name, level, icon, description, className }: RatingSkillProps) {
  return (
    <div className={cn('bg-gray-50 dark:bg-gray-800 p-5 rounded-lg', className)}>
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-lg dark:text-white flex items-center">
          <i className={`fas ${icon} text-primary mr-3`}></i>
          {name}
        </h4>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <i 
              key={index}
              className={`fas ${
                index < Math.floor(level) 
                  ? 'fa-star text-amber-500' 
                  : index < level 
                    ? 'fa-star-half-alt text-amber-500' 
                    : 'fa-star text-gray-300 dark:text-gray-600'
              }`}
            ></i>
          ))}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
