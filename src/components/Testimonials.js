"use client";

import { useLanguage } from "@/app/context/LanguageContext";


const testimonialsText = {
  en: {
    heading: "Divine Experiences",
    subheading:
      "Hear from devotees who've transformed their lives through sacred rituals",
    items: [
      {
        id: 1,
        name: "Rajesh Sharma",
        location: "Delhi",
        content:
          "Pandit Ji's Ramayan Path was a transformative experience for our family. His explanations made the epic come alive for us. Highly recommended!",
      },
      {
        id: 2,
        name: "Priya Patel",
        location: "Mumbai",
        content:
          "We booked Pandit Ji for our house warming ceremony. His knowledge and way of performing puja was exceptional. Our home feels blessed.",
      },
      {
        id: 3,
        name: "Amit Singh",
        location: "Bangalore",
        content:
          "The Sunderkand Path organized by Pandit Ji helped us through a difficult time. His devotion and sincerity are truly inspiring.",
      },
    ],
  },
  hi: {
    heading: "दिव्य अनुभव",
    subheading:
      "भक्तों से सुनिए जिन्होंने पवित्र अनुष्ठानों के माध्यम से अपने जीवन को रूपांतरित किया",
    items: [
      {
        id: 1,
        name: "राजेश शर्मा",
        location: "दिल्ली",
        content:
          "पंडित जी का रामायण पाठ हमारे परिवार के लिए एक परिवर्तनकारी अनुभव था। उनकी व्याख्याएं महाकाव्य को जीवंत बना देती हैं। अत्यधिक अनुशंसित!",
      },
      {
        id: 2,
        name: "प्रिया पटेल",
        location: "मुंबई",
        content:
          "हमने पंडित जी को गृह प्रवेश समारोह के लिए बुक किया था। उनकी पूजा विधि और ज्ञान अद्भुत था। हमारा घर अब और भी पवित्र लगता है।",
      },
      {
        id: 3,
        name: "अमित सिंह",
        location: "बेंगलुरु",
        content:
          "पंडित जी द्वारा आयोजित सुंदरकांड पाठ ने कठिन समय में हमें सहारा दिया। उनकी भक्ति और ईमानदारी प्रेरणादायक हैं।",
      },
    ],
  },
};

export default function Testimonials() {
  const { language } = useLanguage();
  const content = testimonialsText[language];

  return (
    <div className="relative bg-gradient-to-b from-indigo-900 to-purple-900 py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cosmic-dots.png')] bg-repeat opacity-50"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-amber-400/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-4">
            {content.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto">
            {content.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.items.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-b from-purple-800/40 to-indigo-900/60 rounded-xl p-8 hover:shadow-lg transition-all duration-500 hover:scale-[1.02] border border-purple-700/30 hover:border-amber-400/30 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>

              <div className="relative z-10">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-purple-100 italic mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-amber-300">{testimonial.name}</p>
                  <p className="text-purple-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
