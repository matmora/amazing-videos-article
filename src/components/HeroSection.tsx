import { useEffect } from 'react';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');
    
    setTimeout(() => {
      heroTitle?.classList.add('visible');
      setTimeout(() => {
        heroSubtitle?.classList.add('visible');
        setTimeout(() => {
          heroButton?.classList.add('visible');
        }, 200);
      }, 300);
    }, 500);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional content creator filming Instagram video in golden hour light"
          className="hero-image lazy-image"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="editorial-container text-center text-white">
          <h1 className="hero-title slide-up mb-6 text-4xl md:text-6xl lg:text-7xl font-editorial font-bold leading-tight">
            <span className="text-reveal">
              <span>3 Steps to Make</span>
            </span>
            <br />
            <span className="text-reveal">
              <span>Amazing Videos for</span>
            </span>
            <br />
            <span className="text-reveal">
              <span>Instagram/TikTok</span>
            </span>
          </h1>
          
          <p className="hero-subtitle fade-in mb-8 text-lg md:text-xl lg:text-2xl font-inter font-light max-w-2xl mx-auto opacity-90">
            Learn the essentials of creating viral, scroll-stopping content.
          </p>
          
          <button
            onClick={scrollToContact}
            className="hero-button fade-in btn-editorial text-base md:text-lg px-8 py-4"
          >
            Work With Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm font-inter mb-2">Scroll</span>
          <div className="w-0.5 h-8 bg-white"></div>
        </div>
      </div>
    </section>
  );
};