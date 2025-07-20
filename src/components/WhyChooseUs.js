'use client';

import { useLanguage } from "@/app/context/LanguageContext";
import { FaCheck, FaAward, FaHandsHelping, FaBookReader } from "react-icons/fa";

export default function WhyChooseUs() {
  const { language } = useLanguage();

  // 🟡 Language text data yahi file mein
  const text = {
    en: {
      heading: "Why Choose Our Divine Services?",
      subheading: "Experience the perfect blend of ancient wisdom and spiritual authenticity",
      features: [
        {
          name: "Authentic Rituals",
          description: "All rituals performed exactly as prescribed in ancient scriptures with proper pronunciation.",
        },
        {
          name: "Experienced Pandit Ji",
          description: "10+ years of experience in performing various Vedic ceremonies and spiritual events.",
        },
        {
          name: "Personalized Guidance",
          description: "Customized services based on your specific needs and astrological considerations.",
        },
        {
          name: "Scriptural Knowledge",
          description: "Deep knowledge of Sanskrit and Vedic scriptures with ability to explain meanings.",
        },
      ],
    },
    hi: {
      heading: "हमारी दिव्य सेवाएं क्यों चुनें?",
      subheading: "प्राचीन ज्ञान और आध्यात्मिक शुद्धता का अद्भुत संगम अनुभव करें",
      features: [
        {
          name: "प्रामाणिक अनुष्ठान",
          description: "सभी अनुष्ठान शास्त्रों के अनुसार सही उच्चारण के साथ किए जाते हैं।",
        },
        {
          name: "अनुभवी पंडित जी",
          description: "10+ वर्षों का अनुभव विभिन्न वैदिक अनुष्ठानों और आध्यात्मिक आयोजनों में।",
        },
        {
          name: "व्यक्तिगत मार्गदर्शन",
          description: "आपकी आवश्यकताओं और ज्योतिषीय दशाओं के अनुसार सेवाएं प्रदान की जाती हैं।",
        },
        {
          name: "शास्त्रीय ज्ञान",
          description: "संस्कृत और वैदिक ग्रंथों का गहरा ज्ञान व अर्थ समझाने की क्षमता।",
        },
      ],
    },
  };

  const t = text[language];
  const icons = [
    <FaCheck key="check" className="text-2xl text-amber-400" />,
    <FaAward key="award" className="text-2xl text-amber-400" />,
    <FaHandsHelping key="hands" className="text-2xl text-amber-400" />,
    <FaBookReader key="book" className="text-2xl text-amber-400" />,
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-900 to-purple-900 py-20 overflow-hidden">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/cosmic-pattern.png')] bg-repeat opacity-30"></div>
      </div>

      {/* Floating spiritual elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-16 h-16 bg-amber-400/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-4">
            {t.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-purple-100 max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-600/30 rounded-2xl blur-lg opacity-70"></div>
            <img
              src="/images/sunil1.jpg"
              alt="Pandit Ji performing ritual"
              className="relative rounded-xl shadow-2xl border-2 border-amber-400/20 transform hover:scale-[1.01] transition-transform duration-500"
            />
          </div>

          <div className="space-y-8">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="flex bg-gradient-to-br from-purple-800/40 to-indigo-900/60 p-6 rounded-xl border border-purple-700/30 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0 mr-6 mt-1">
                  <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/30 rounded-full">
                    {icons[index]}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-300 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-purple-100">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="mb-10 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg overflow-hidden shadow-2xl">
        <div className="relative pt-[177.78%]"> {/* 9:16 Aspect Ratio = 16/9 * 100% = 177.78% */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YeLZXG_RjNM?rel=0&autoplay=1&mute=1"
            title="YouTube Shorts player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>


    </div>
  );
}
