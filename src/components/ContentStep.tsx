import { ReactNode } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ContentStepProps {
  stepNumber: string;
  title: string;
  content: ReactNode;
  tip?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export const ContentStep = ({ 
  stepNumber, 
  title, 
  content, 
  tip, 
  imageSrc, 
  imageAlt, 
  reverse = false 
}: ContentStepProps) => {
  return (
    <section className="editorial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          
          {/* Content */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
            <div className="fade-in">
              <div className="mb-4">
                <span className="text-sm font-inter font-medium tracking-widest text-soft-gray uppercase">
                  Step {stepNumber}
                </span>
              </div>
              
              <h2 className="slide-up mb-6 text-3xl md:text-4xl lg:text-5xl font-editorial font-semibold leading-tight">
                {title}
              </h2>
              
              <div className="fade-in mb-8 text-lg md:text-xl font-inter leading-relaxed text-elegant-gray space-y-4">
                {content}
              </div>
              
              {tip && (
                <div className="fade-in p-6 bg-gradient-subtle rounded-lg border-l-4 border-primary">
                  <p className="text-base font-inter font-medium text-foreground">
                    <span className="text-primary font-semibold">Tip:</span> {tip}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className={`${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="slide-up">
              {/* Mobile: full width, Desktop: 1:1 square aspect ratio */}
              <div className="lg:max-w-md lg:mx-auto w-full">
                <AspectRatio ratio={1} className="hidden lg:block">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="lazy-image rounded-lg shadow-2xl w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="section-image lazy-image rounded-lg shadow-2xl lg:hidden"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};