import { Instagram } from 'lucide-react';
import authorProfile from '@/assets/author-profile.jpg';

export const AuthorSection = () => {
  return (
    <section className="editorial-section bg-gradient-subtle">
      <div className="editorial-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="slide-up mb-12 text-3xl md:text-4xl font-editorial font-semibold text-center">
            About the Author
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 fade-in">
              <img
                src={authorProfile}
                alt="Mat Mora - Professional content creator and filmmaker"
                className="w-full aspect-square object-cover rounded-lg shadow-2xl lazy-image"
                loading="lazy"
              />
            </div>
            
            <div className="md:col-span-2 fade-in">
              <h3 className="mb-4 text-2xl md:text-3xl font-editorial font-semibold">
                Mat Mora
              </h3>
              
              <p className="mb-8 text-lg font-inter leading-relaxed text-elegant-gray">
                Mat Mora is a professional content creator, photographer, and filmmaker with over 100 million organic views on social media. He specializes in viral content strategies for Instagram, TikTok, and beyond.
              </p>
              
              <a
                href="https://www.instagram.com/matmora_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary hover:text-elegant-gray transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-inter font-medium text-lg">@matmora_</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};