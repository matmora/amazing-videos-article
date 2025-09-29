export const CTASection = () => {
  return (
    <section id="contact-section" className="editorial-section bg-gradient-subtle">
      <div className="editorial-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up mb-8 text-3xl md:text-4xl lg:text-5xl font-editorial font-semibold leading-tight">
            Ready to make your next project go viral?
          </h2>
          
          <p className="fade-in mb-12 text-lg md:text-xl font-inter leading-relaxed text-elegant-gray">
            Let's create something unforgettable together. If you have an important project and would like my help, contact me below.
          </p>
          
          <a
            href="https://wa.link/pkr683"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-in btn-editorial text-lg px-10 py-4 inline-block"
          >
            Start Creating Now
          </a>
        </div>
      </div>
    </section>
  );
};