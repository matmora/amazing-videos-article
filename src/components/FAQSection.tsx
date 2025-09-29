import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    question: "What's the best time of day to film for Instagram?",
    answer: "The golden hour, about 1–2 hours before sunset is the most flattering time to shoot. The soft, warm light makes skin tones glow and adds a cinematic feel to your video. If you prefer fewer people around, sunrise offers equally beautiful light with the bonus of empty streets and locations. Always double-check the exact times with your weather app."
  },
  {
    question: "Do I need professional gear to go viral on TikTok?",
    answer: "Not really, many of the most viral TikToks are filmed on iPhones. What matters most is creativity, storytelling, and authenticity. That said, if you want to position your content or brand as premium, using a professional camera can give you a polished, editorial look."
  },
  {
    question: "How can I make my videos stand out?",
    answer: "Focus on emotion and remember this phrase 'People don't remember what you said but they will remember how you made them feel'. Aim to make viewers smile, laugh, or feel inspired. And don't overlook the first 5 seconds—the hook is everything. Start strong with something surprising or visually striking to stop the scroll."
  }
];

export const FAQSection = () => {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="slide-up mb-12 text-3xl md:text-4xl lg:text-5xl font-editorial font-semibold text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="fade-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 py-2 bg-card"
                >
                  <AccordionTrigger className="text-left font-inter font-medium text-lg md:text-xl hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg font-inter leading-relaxed text-elegant-gray pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};