'use client';

import Link from "next/link";
import { FaOm, FaBook, FaFire } from "react-icons/fa";
import { useLanguage } from "@/app/context/LanguageContext";

export default function ServicesPreview() {
  const { language } = useLanguage();

  // 🟡 Language data inline yahi par define
  const servicesText = {
    en: {
      heading: "Our Sacred Services",
      subheading: "Experience transformative rituals that connect you with divine energy",
      services: [
        {
          title: "Ramayan Path",
          description: "7 or 9 day recitation with explanations",
        },
        {
          title: "Bhagwat Katha",
          description: "Divine stories of Lord Krishna",
        },
        {
          title: "Havan/Yagya",
          description: "Sacred fire ceremonies for various purposes",
        },
      ],
      button: "Discover All Rituals",
      learnMore: "Learn more",
    },
    hi: {
      heading: "हमारी पावन सेवाएं",
      subheading: "ऐसे अनुष्ठान जो आपको दिव्य ऊर्जा से जोड़ते हैं",
      services: [
        {
          title: "रामायण पाठ",
          description: "7 या 9 दिन का पाठ व्याख्या सहित",
        },
        {
          title: "भागवत कथा",
          description: "भगवान कृष्ण की दिव्य लीलाएं",
        },
        {
          title: "हवन/यज्ञ",
          description: "विभिन्न उद्देश्यों के लिए पवित्र अग्नि अनुष्ठान",
        },
      ],
      button: "सभी अनुष्ठानों को जानें",
      learnMore: "और जानें",
    },
  };

  const t = servicesText[language]; // 🟢 Selected language data
  const icons = [<FaBook />, <FaOm />, <FaFire />];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-purple-900 py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/mandala-pattern.png')] bg-repeat opacity-20"></div>
      </div>

      {/* Floating Om symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <FaOm className="absolute top-20 left-1/4 text-6xl text-purple-700 opacity-10" />
        <FaOm className="absolute bottom-20 right-1/4 text-8xl text-indigo-700 opacity-10" />
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-800/40 to-indigo-900/60 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-500 hover:scale-[1.02] border border-purple-700/30 hover:border-amber-400/30 relative overflow-hidden"
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-amber-500/20 to-amber-600/30 rounded-full">
                    <span className="text-3xl text-amber-400">{icons[index]}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-amber-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-purple-100 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-amber-400 font-medium hover:text-amber-300 group transition-all"
                >
                  {t.learnMore}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-10 py-4 rounded-full hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/40"
          >
            {t.button}
          </Link>
        </div>
      </div>
    </div>
  );
}
