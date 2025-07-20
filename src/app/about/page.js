"use client"
import Navbar from "@/components/Navbar";
import { FaAward, FaBook, FaUniversity, FaPenAlt } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";



export default function About() {
  const { language } = useLanguage();

  const aboutText = {
    en: {
      title: "About Pandit Ji",
      name: "Pandit Sunil Shastri",
      intro1: "With over 10 years of experience in performing Vedic rituals and spiritual ceremonies, Pandit Sunil Shastri is a renowned scholar in Sanskrit and Vedic scriptures.",
      intro2: "He has performed thousands of ceremonies including Ramayan Path, Bhagwat Katha, Sunderkand Path, and various Pujas across the country.",
      educationTitle: "Education & Background",
      edu1: "Shastri in Sanskrit from Jagatguru (Jaipur)",
      edu2: "Specialization in Yajurveda",
      edu3: "Great singer, bhajan, sangeet",
      missionTitle: "Our Mission",
      missionText: "Our mission is to provide authentic Vedic rituals with proper pronunciation and procedures to ensure the spiritual benefits reach the devotees. We believe in preserving our ancient traditions while making them accessible to everyone.",
    },
    hi: {
      title: "पंडित जी के बारे में",
      name: "पंडित सुनील शास्त्री",
      intro1: "10 वर्षों से अधिक अनुभव के साथ वैदिक अनुष्ठानों और आध्यात्मिक समारोहों में, पंडित सुनील शास्त्री संस्कृत और वैदिक शास्त्रों में एक प्रसिद्ध विद्वान हैं।",
      intro2: "उन्होंने पूरे देश में हजारों रामायण पाठ, भागवत कथा, सुंदरकांड पाठ और विभिन्न पूजाएं की हैं।",
      educationTitle: "शिक्षा और पृष्ठभूमि",
      edu1: "संस्कृत में शास्त्री (जगदगुरु, जयपुर)",
      edu2: "यजुर्वेद में विशेषज्ञता",
      edu3: "महान गायक, भजन, संगीत",
      missionTitle: "हमारा उद्देश्य",
      missionText: "हमारा उद्देश्य शुद्ध उच्चारण और विधियों के साथ प्रामाणिक वैदिक अनुष्ठान प्रदान करना है ताकि भक्तों तक आध्यात्मिक लाभ पहुँच सके। हम अपनी प्राचीन परंपराओं को संरक्षित करते हुए उन्हें सभी के लिए सुलभ बनाने में विश्वास रखते हैं।",
    }
  };

  const t = aboutText[language];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden">
      {/* Decorative Elements same as before */}
      <Navbar />

      <div className="relative max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              {t.title}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl p-8 md:p-12 mb-16 border border-purple-700/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-purple-600/30 rounded-full blur-lg opacity-70"></div>
              <img src="/images/sunil2.jpg" alt="Pandit Ji" className="relative rounded-full w-56 h-56 object-cover mx-auto border-4 border-amber-400/50 shadow-lg" />
            </div>
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl font-bold text-amber-300 mb-4">{t.name}</h2>
              <p className="text-amber-100 mb-6 text-lg">{t.intro1}</p>
              <p className="text-amber-100 text-lg">{t.intro2}</p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center">
              <FaUniversity className="mr-3 text-amber-400" /> {t.educationTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start"><FaAward className="text-amber-400 mt-1 mr-4 flex-shrink-0" /><span className="text-amber-100">{t.edu1}</span></li>
              <li className="flex items-start"><FaBook className="text-amber-400 mt-1 mr-4 flex-shrink-0" /><span className="text-amber-100">{t.edu2}</span></li>
              <li className="flex items-start"><FaPenAlt className="text-amber-400 mt-1 mr-4 flex-shrink-0" /><span className="text-amber-100">{t.edu3}</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-300 mb-6 flex items-center">
              <FaBook className="mr-3 text-amber-400" /> {t.missionTitle}
            </h3>
            <p className="text-amber-100 text-lg">{t.missionText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
