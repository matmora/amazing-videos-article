import { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ContentStep } from '@/components/ContentStep';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { AuthorSection } from '@/components/AuthorSection';
import { useScrollAnimation, useLazyImageLoading } from '@/hooks/useScrollAnimation';

import step1Image from '@/assets/step1-preproduction.jpg';
import step2Image from '@/assets/step2-lighting.jpg';
import step3Image from '@/assets/step3-camera.jpg';

const Index = () => {
  useScrollAnimation();
  useLazyImageLoading();

  useEffect(() => {
    // Initialize lazy loading for images
    const lazyImages = document.querySelectorAll('.lazy-image');
    lazyImages.forEach((img) => {
      img.classList.add('loaded');
    });
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Article Content */}
      <article>
        {/* Step 1: Pre-production */}
        <ContentStep
          stepNumber="01"
          title="Do some pre-production."
          content={
            <p>
              Look for inspiration and references from content you like and that already went viral. 
              This will help you decide on the story, location, outfit style, and even the music for your video.
            </p>
          }
          tip="Make a moodboard and lock in your creative direction before filming."
          imageSrc={step1Image}
          imageAlt="Creative workspace with moodboard and video planning materials for Instagram content"
        />

        {/* Step 2: Golden Hour */}
        <ContentStep
          stepNumber="02"
          title="Choose the best hour."
          content={
            <p>
              Check the weather app and determine the best range of hours. Usually a couple of hours before sunset 
              (Golden hour) you'll get soft, flattering golden light. Sunrise or blue hour is also amazing for 
              avoiding crowds while keeping that soft natural glow, though it requires an early wake-up!
            </p>
          }
          imageSrc={step2Image}
          imageAlt="Golden hour sunset lighting with soft warm glow for video content creation"
          reverse
        />

        {/* Step 3: Camera Choice */}
        <ContentStep
          stepNumber="03"
          title="Use the best camera you have available."
          content={
            <p>
              For a professional, editorial look, use a professional camera—or ask a friend who knows how to use one. 
              For a casual, organic style, the latest iPhone works great. Tip: the native camera tends to overexpose, 
              so enable RAW and underexpose to -0.7EV for more editing flexibility.
            </p>
          }
          imageSrc={step3Image}
          imageAlt="Professional camera equipment and latest iPhone for content creation"
        />
      </article>

      {/* Call to Action */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Author Section */}
      <AuthorSection />
    </main>
  );
};

export default Index;
