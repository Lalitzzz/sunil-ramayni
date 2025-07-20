// "use client"
// import Navbar from "@/components/Navbar";
// import { FaOm, FaBook, FaFire, FaWater, FaStar } from "react-icons/fa";
// import { GiPrayerBeads, GiLotus, GiDiscussion, GiRam, GiTrident, GiIndiaGate, GiCandleFlame, GiPapers } from "react-icons/gi";
// import { useLanguage } from "../context/LanguageContext";

// export default function Services() {
//   const { language } = useLanguage();

//   const servicesText = {
//     en: {
//       heading: "Our Spiritual Services",
//       subheading:
//         "Authentic Vedic rituals performed with proper procedures and pronunciation for maximum spiritual benefits.",
//       duration: "Duration",
//       benefits: "Benefits",
//       book: "Book This Service",
//       customHeading: "Custom Services",
//       customText:
//         "We also provide customized services based on your specific needs and astrological considerations.",
//       contact: "Contact for Custom Services",
//     },
//     hi: {
//       heading: "हमारी आध्यात्मिक सेवाएं",
//       subheading:
//         "शुद्ध उच्चारण और विधिपूर्वक किए गए प्रामाणिक वैदिक अनुष्ठान आपके आध्यात्मिक लाभ के लिए।",
//       duration: "अवधि",
//       benefits: "लाभ",
//       book: "इस सेवा को बुक करें",
//       customHeading: "कस्टम सेवाएं",
//       customText:
//         "हम आपकी विशेष आवश्यकताओं और ज्योतिषीय विचारों के आधार पर कस्टम सेवाएं भी प्रदान करते हैं।",
//       contact: "कस्टम सेवा के लिए संपर्क करें",
//     },
//   };

//   const services = [
//     {
//       id: 1,
//       title: language === "en" ? "Ramayan Path" : "रामायण पाठ",
//       description:
//         language === "en"
//           ? "Complete recitation of Ramayan over 7 or 9 days with explanations and discourses."
//           : "रामायण का 7 या 9 दिनों तक पूर्ण पाठ, व्याख्या और प्रवचन सहित।",
//       icon: <FaBook className="text-3xl text-amber-400" />,
//       duration: "7/9 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Brings peace and harmony", "Removes obstacles", "Blessings of Lord Rama"]
//           : ["शांति और सौहार्द लाता है", "बाधाएं दूर करता है", "भगवान राम का आशीर्वाद"],
//     },
//     {
//       id: 2,
//       title: language === "en" ? "Bhagwat Katha" : "भागवत कथा",
//       description:
//         language === "en"
//           ? "Narration of Shrimad Bhagwat Puran over 7 days with stories and teachings of Lord Krishna."
//           : "7 दिनों तक श्रीमद भागवत पुराण की कथा, भगवान श्रीकृष्ण की लीलाओं और शिक्षाओं सहित।",
//       icon: <FaOm className="text-3xl text-amber-400" />,
//       duration: "7 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Spiritual enlightenment", "Liberation from cycle of birth-death", "Divine blessings"]
//           : ["आध्यात्मिक जागरूकता", "जन्म-मरण के चक्र से मुक्ति", "दिव्य आशीर्वाद"],
//     },
//     {
//       id: 3,
//       title: language === "en" ? "Sunderkand Path" : "सुंदरकांड पाठ",
//       description:
//         language === "en"
//           ? "Recitation of Sunderkand from Ramayan, especially beneficial for overcoming difficulties."
//           : "रामायण से सुंदरकांड का पाठ, विशेष रूप से कठिनाइयों को दूर करने के लिए।",
//       icon: <FaStar className="text-3xl text-amber-400" />,
//       duration: "1 " + (language === "en" ? "Day" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Removes troubles", "Brings success", "Hanuman Ji's protection"]
//           : ["कष्टों का नाश", "सफलता प्राप्त होती है", "हनुमान जी की कृपा"],
//     },
//     {
//       id: 4,
//       title: language === "en" ? "Havan/Yagya" : "हवन/यज्ञ",
//       description:
//         language === "en"
//           ? "Sacred fire ceremony for various purposes like health, prosperity, and spiritual growth."
//           : "स्वास्थ्य, समृद्धि और आध्यात्मिक विकास हेतु पवित्र अग्निहोत्र यज्ञ।",
//       icon: <FaFire className="text-3xl text-amber-400" />,
//       duration: "2-4 " + (language === "en" ? "Hours" : "घंटे"),
//       benefits:
//         language === "en"
//           ? ["Purifies environment", "Fulfills desires", "Removes negative energies"]
//           : ["वातावरण शुद्ध करता है", "इच्छाओं की पूर्ति", "नकारात्मक ऊर्जा दूर होती है"],
//     },
//     {
//       id: 5,
//       title: language === "en" ? "Griha Pravesh Puja" : "गृह प्रवेश पूजा",
//       description:
//         language === "en"
//           ? "House warming ceremony performed before entering a new home for blessings and prosperity."
//           : "नए घर में प्रवेश से पहले की जाने वाली गृह प्रवेश पूजा, समृद्धि और शुभता के लिए।",
//       icon: <FaWater className="text-3xl text-amber-400" />,
//       duration: "2-3 " + (language === "en" ? "Hours" : "घंटे"),
//       benefits:
//         language === "en"
//           ? ["Blessings for new home", "Positive energies", "Protection from evil"]
//           : ["नए घर के लिए आशीर्वाद", "सकारात्मक ऊर्जा", "दोषों से सुरक्षा"],
//     },
//     {
//       id: 6,
//       title: language === "en" ? "Ram Katha" : "रामकथा",
//       description: language === "en" ? "Story and life events of Lord Rama." : "भगवान राम की कथा और जीवन प्रसंग।",
//       icon: <GiRam className="text-3xl text-amber-400" />,
//       duration: "1-7 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Divine blessings", "Spiritual growth", "Knowledge of Dharma"]
//           : ["दिव्य आशीर्वाद", "आध्यात्मिक विकास", "धर्म का ज्ञान"],
//     },
//     {
//       id: 7,
//       title: language === "en" ? "Shrimad Bhagwat Katha" : "श्रीमद्भागवत कथा",
//       description: language === "en" ? "Narration of divine stories from Bhagwat Puran." : "भागवत पुराण की दिव्य कथाएं।",
//       icon: <GiDiscussion className="text-3xl text-amber-400" />,
//       duration: "7 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Attainment of moksha", "Divine knowledge", "Purification of soul"]
//           : ["मोक्ष की प्राप्ति", "दिव्य ज्ञान", "आत्मा की शुद्धि"],
//     },
//     {
//       id: 8,
//       title: language === "en" ? "Shiv Katha" : "शिव कथा",
//       description: language === "en" ? "Sacred stories of Lord Shiva." : "भगवान शिव की पावन कथा।",
//       icon: < GiTrident className="text-3xl text-amber-400" />,
//       duration: "1-3 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Destruction of sins", "Fulfillment of desires", "Divine grace"]
//           : ["पापों का नाश", "मनोकामनाओं की पूर्ति", "दिव्य कृपा"],
//     },
//     {
//       id: 9,
//       title: language === "en" ? "Nani Bai Ka Mayra" : "नानी बाई का मायरा",
//       description: language === "en" ? "A devotional story event of Nani Bai." : "नानी बाई के मायरे की कथा।",
//       icon: <GiIndiaGate className="text-3xl text-amber-400" />,
//       duration: "1 " + (language === "en" ? "Day" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Devotional experience", "Cultural enrichment", "Spiritual upliftment"]
//           : ["भक्ति अनुभूति", "सांस्कृतिक समृद्धि", "आध्यात्मिक उन्नति"],
//     },
//     {
//       id: 10,
//       title: language === "en" ? "Ramcharitmanas Path" : "अखंड रामचरितमानस पाठ",
//       description: language === "en" ? "Non-stop recitation of Ramcharitmanas." : "अखंड रामचरितमानस का पाठ।",
//       icon: <GiCandleFlame className="text-3xl text-amber-400" />,
//       duration: "1-9 " + (language === "en" ? "Days" : "दिन"),
//       benefits:
//         language === "en"
//           ? ["Divine blessings", "Positive vibrations", "Family harmony"]
//           : ["दिव्य आशीर्वाद", "सकारात्मक कंपन", "पारिवारिक सद्भाव"],
//     },
//     {
//       id: 11,
//       title: language === "en" ? "Dharmik Anushthan" : "धार्मिक अनुष्ठान",
//       description: language === "en" ? "Custom religious ceremonies." : "विशेष धार्मिक अनुष्ठान।",
//       icon: <GiPapers className="text-3xl text-amber-400" />,
//       duration: "Varies",
//       benefits:
//         language === "en"
//           ? ["Personalized spiritual benefits", "Removal of specific obstacles", "Divine grace"]
//           : ["व्यक्तिगत आध्यात्मिक लाभ", "विशिष्ट बाधाओं का निवारण", "दिव्य कृपा"],
//     },
//     {
//       id: 12,
//       title: language === "en" ? "Jaap Mala" : "जाप माला",
//       description: language === "en" ? "Chanting with rosary beads for meditation." : "जप माला द्वारा मंत्र जाप।",
//       icon: <GiPrayerBeads className="text-3xl text-amber-400" />,
//       duration: "1-2 " + (language === "en" ? "Hours" : "घंटे"),
//       benefits:
//         language === "en"
//           ? ["Mental peace", "Increased concentration", "Spiritual connection"]
//           : ["मानसिक शांति", "एकाग्रता में वृद्धि", "आध्यात्मिक जुड़ाव"],
//     },
//     {
//       id: 13,
//       title: language === "en" ? "Bhajan Sandhya" : "भजन संध्या",
//       description: language === "en" ? "Devotional evening songs and music." : "सांध्य समय भजन की प्रस्तुति।",
//       icon: <GiLotus className="text-3xl text-amber-400" />,
//       duration: "2-3 " + (language === "en" ? "Hours" : "घंटे"),
//       benefits:
//         language === "en"
//           ? ["Divine bliss", "Stress relief", "Cultural enrichment"]
//           : ["दिव्य आनंद", "तनाव से मुक्ति", "सांस्कृतिक समृद्धि"],
//     },
//   ];
//   const t = servicesText[language];

//   return (
//     <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden">
//       {/* Animated Glow Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen opacity-20 animate-blob"></div>
//         <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       {/* Floating Devanagari Characters */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <span className="absolute top-1/5 left-1/6 text-6xl opacity-5 text-white">ॐ</span>
//         <span className="absolute top-2/3 right-1/4 text-8xl opacity-5 text-white">ॐ</span>
//         <span className="absolute bottom-1/4 left-1/3 text-7xl opacity-5 text-white">ॐ</span>
//         <span className="absolute top-1/3 left-1/2 text-6xl opacity-5 text-white">नमः शिवाय</span>
//       </div>

//       <Navbar />

//       <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
//               {t.heading}
//             </span>
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
//           <p className="mt-6 text-xl text-amber-100 max-w-2xl mx-auto">{t.subheading}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition duration-300 border border-purple-700/30 backdrop-blur-sm"
//             >
//               <div className="p-6">
//                 <div className="flex items-center mb-4">
//                   <div className="mr-4">{service.icon}</div>
//                   <h2 className="text-2xl font-bold text-amber-300">{service.title}</h2>
//                 </div>
//                 <p className="text-amber-100 mb-4">{service.description}</p>
//                 <div className="mb-4 text-amber-200">
//                   <span className="font-semibold">{t.duration}:</span> {service.duration}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold mb-2 text-amber-300">{t.benefits}:</h4>
//                   <ul className="list-disc pl-5 text-amber-100 space-y-1">
//                     {service.benefits.map((benefit, index) => (
//                       <li key={index}>{benefit}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//               <div className="px-6 py-4 bg-gradient-to-r from-amber-600/20 to-amber-400/20">
//                 <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition duration-300">
//                   {t.book}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <br />

//         <div className="mb-10 mx-auto w-full max-w-xl rounded-lg overflow-hidden shadow-2xl">
//           <iframe
//             width="100%"
//             height="250"
//             src="https://www.youtube.com/embed/uFD5hnKeT5c?rel=0&autoplay=1&mute=1&si=bYp4Ohjgr5fGVpPe"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
//           ></iframe>
//         </div>
//         <br/>
//         <div className="mb-10 mx-auto w-full max-w-xl rounded-lg overflow-hidden shadow-2xl">
//   <iframe
//     width="100%"
//     height="250"
//     src="https://www.youtube.com/embed/2Dl47X6gtX4?rel=0&autoplay=1&mute=1"
//     title="YouTube video player"
//     frameBorder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//     className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
//   ></iframe>
// </div>


//         <div className="mt-16 bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl p-8 border border-purple-700/30 backdrop-blur-sm">
//           <h2 className="text-3xl font-bold text-amber-300 mb-6 text-center">{t.customHeading}</h2>
//           <p className="text-amber-100 mb-6 text-center">{t.customText}</p>
//           <div className="text-center">
//             <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-3 px-8 rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition duration-300">
//               {t.contact}
//             </button>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }



"use client"
import Navbar from "@/components/Navbar";
import { FaOm, FaBook, FaFire, FaWater, FaStar } from "react-icons/fa";
import { GiPrayerBeads, GiLotus, GiDiscussion, GiRam, GiTrident, GiIndiaGate, GiCandleFlame, GiPapers } from "react-icons/gi";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { language } = useLanguage();

  const servicesText = {
    en: {
      heading: "Our Spiritual Services",
      subheading: "Authentic Vedic rituals performed with proper procedures and pronunciation for maximum spiritual benefits.",
      duration: "Duration",
      benefits: "Benefits",
      book: "Book This Service",
      customHeading: "Custom Services",
      customText: "We also provide customized services based on your specific needs and astrological considerations.",
      contact: "Contact for Custom Services",
      whatsappMessage: "Hello, I would like to book the {service} service. Please provide more details."
    },
    hi: {
      heading: "हमारी आध्यात्मिक सेवाएं",
      subheading: "शुद्ध उच्चारण और विधिपूर्वक किए गए प्रामाणिक वैदिक अनुष्ठान आपके आध्यात्मिक लाभ के लिए।",
      duration: "अवधि",
      benefits: "लाभ",
      book: "इस सेवा को बुक करें",
      customHeading: "कस्टम सेवाएं",
      customText: "हम आपकी विशेष आवश्यकताओं और ज्योतिषीय विचारों के आधार पर कस्टम सेवाएं भी प्रदान करते हैं।",
      contact: "कस्टम सेवा के लिए संपर्क करें",
      whatsappMessage: "नमस्ते, मैं {service} सेवा बुक करना चाहता/चाहती हूँ। कृपया अधिक जानकारी प्रदान करें।"
    },
  };

  const handleBookService = (serviceName) => {
    const whatsappNumber = "9610719306";
    const message = t.whatsappMessage.replace('{service}', serviceName);
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const services = [
    {
      id: 1,
      title: language === "en" ? "Ramayan Path" : "रामायण पाठ",
      description: language === "en" 
        ? "Complete recitation of Ramayan over 7 or 9 days with explanations and discourses."
        : "रामायण का 7 या 9 दिनों तक पूर्ण पाठ, व्याख्या और प्रवचन सहित।",
      icon: <FaBook className="text-3xl text-amber-400" />,
      duration: "7/9 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Brings peace and harmony", "Removes obstacles", "Blessings of Lord Rama"]
        : ["शांति और सौहार्द लाता है", "बाधाएं दूर करता है", "भगवान राम का आशीर्वाद"],
    },
    {
      id: 2,
      title: language === "en" ? "Bhagwat Katha" : "भागवत कथा",
      description: language === "en"
        ? "Narration of Shrimad Bhagwat Puran over 7 days with stories and teachings of Lord Krishna."
        : "7 दिनों तक श्रीमद भागवत पुराण की कथा, भगवान श्रीकृष्ण की लीलाओं और शिक्षाओं सहित।",
      icon: <FaOm className="text-3xl text-amber-400" />,
      duration: "7 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Spiritual enlightenment", "Liberation from cycle of birth-death", "Divine blessings"]
        : ["आध्यात्मिक जागरूकता", "जन्म-मरण के चक्र से मुक्ति", "दिव्य आशीर्वाद"],
    },
    {
      id: 3,
      title: language === "en" ? "Sunderkand Path" : "सुंदरकांड पाठ",
      description: language === "en"
        ? "Recitation of Sunderkand from Ramayan, especially beneficial for overcoming difficulties."
        : "रामायण से सुंदरकांड का पाठ, विशेष रूप से कठिनाइयों को दूर करने के लिए।",
      icon: <FaStar className="text-3xl text-amber-400" />,
      duration: "1 " + (language === "en" ? "Day" : "दिन"),
      benefits: language === "en"
        ? ["Removes troubles", "Brings success", "Hanuman Ji's protection"]
        : ["कष्टों का नाश", "सफलता प्राप्त होती है", "हनुमान जी की कृपा"],
    },
    {
      id: 4,
      title: language === "en" ? "Havan/Yagya" : "हवन/यज्ञ",
      description: language === "en"
        ? "Sacred fire ceremony for various purposes like health, prosperity, and spiritual growth."
        : "स्वास्थ्य, समृद्धि और आध्यात्मिक विकास हेतु पवित्र अग्निहोत्र यज्ञ।",
      icon: <FaFire className="text-3xl text-amber-400" />,
      duration: "2-4 " + (language === "en" ? "Hours" : "घंटे"),
      benefits: language === "en"
        ? ["Purifies environment", "Fulfills desires", "Removes negative energies"]
        : ["वातावरण शुद्ध करता है", "इच्छाओं की पूर्ति", "नकारात्मक ऊर्जा दूर होती है"],
    },
    {
      id: 5,
      title: language === "en" ? "Griha Pravesh Puja" : "गृह प्रवेश पूजा",
      description: language === "en"
        ? "House warming ceremony performed before entering a new home for blessings and prosperity."
        : "नए घर में प्रवेश से पहले की जाने वाली गृह प्रवेश पूजा, समृद्धि और शुभता के लिए।",
      icon: <FaWater className="text-3xl text-amber-400" />,
      duration: "2-3 " + (language === "en" ? "Hours" : "घंटे"),
      benefits: language === "en"
        ? ["Blessings for new home", "Positive energies", "Protection from evil"]
        : ["नए घर के लिए आशीर्वाद", "सकारात्मक ऊर्जा", "दोषों से सुरक्षा"],
    },
    {
      id: 6,
      title: language === "en" ? "Ram Katha" : "रामकथा",
      description: language === "en" 
        ? "Story and life events of Lord Rama." 
        : "भगवान राम की कथा और जीवन प्रसंग।",
      icon: <GiRam className="text-3xl text-amber-400" />,
      duration: "1-7 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Divine blessings", "Spiritual growth", "Knowledge of Dharma"]
        : ["दिव्य आशीर्वाद", "आध्यात्मिक विकास", "धर्म का ज्ञान"],
    },
    {
      id: 7,
      title: language === "en" ? "Shrimad Bhagwat Katha" : "श्रीमद्भागवत कथा",
      description: language === "en" 
        ? "Narration of divine stories from Bhagwat Puran." 
        : "भागवत पुराण की दिव्य कथाएं।",
      icon: <GiDiscussion className="text-3xl text-amber-400" />,
      duration: "7 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Attainment of moksha", "Divine knowledge", "Purification of soul"]
        : ["मोक्ष की प्राप्ति", "दिव्य ज्ञान", "आत्मा की शुद्धि"],
    },
    {
      id: 8,
      title: language === "en" ? "Shiv Katha" : "शिव कथा",
      description: language === "en" 
        ? "Sacred stories of Lord Shiva." 
        : "भगवान शिव की पावन कथा।",
      icon: <GiTrident className="text-3xl text-amber-400" />,
      duration: "1-3 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Destruction of sins", "Fulfillment of desires", "Divine grace"]
        : ["पापों का नाश", "मनोकामनाओं की पूर्ति", "दिव्य कृपा"],
    },
    {
      id: 9,
      title: language === "en" ? "Nani Bai Ka Mayra" : "नानी बाई का मायरा",
      description: language === "en" 
        ? "A devotional story event of Nani Bai." 
        : "नानी बाई के मायरे की कथा।",
      icon: <GiIndiaGate className="text-3xl text-amber-400" />,
      duration: "1 " + (language === "en" ? "Day" : "दिन"),
      benefits: language === "en"
        ? ["Devotional experience", "Cultural enrichment", "Spiritual upliftment"]
        : ["भक्ति अनुभूति", "सांस्कृतिक समृद्धि", "आध्यात्मिक उन्नति"],
    },
    {
      id: 10,
      title: language === "en" ? "Ramcharitmanas Path" : "अखंड रामचरितमानस पाठ",
      description: language === "en" 
        ? "Non-stop recitation of Ramcharitmanas." 
        : "अखंड रामचरितमानस का पाठ।",
      icon: <GiCandleFlame className="text-3xl text-amber-400" />,
      duration: "1-9 " + (language === "en" ? "Days" : "दिन"),
      benefits: language === "en"
        ? ["Divine blessings", "Positive vibrations", "Family harmony"]
        : ["दिव्य आशीर्वाद", "सकारात्मक कंपन", "पारिवारिक सद्भाव"],
    },
    {
      id: 11,
      title: language === "en" ? "Dharmik Anushthan" : "धार्मिक अनुष्ठान",
      description: language === "en" 
        ? "Custom religious ceremonies." 
        : "विशेष धार्मिक अनुष्ठान।",
      icon: <GiPapers className="text-3xl text-amber-400" />,
      duration: "Varies",
      benefits: language === "en"
        ? ["Personalized spiritual benefits", "Removal of specific obstacles", "Divine grace"]
        : ["व्यक्तिगत आध्यात्मिक लाभ", "विशिष्ट बाधाओं का निवारण", "दिव्य कृपा"],
    },
    {
      id: 12,
      title: language === "en" ? "Jaap Mala" : "जाप माला",
      description: language === "en" 
        ? "Chanting with rosary beads for meditation." 
        : "जप माला द्वारा मंत्र जाप।",
      icon: <GiPrayerBeads className="text-3xl text-amber-400" />,
      duration: "1-2 " + (language === "en" ? "Hours" : "घंटे"),
      benefits: language === "en"
        ? ["Mental peace", "Increased concentration", "Spiritual connection"]
        : ["मानसिक शांति", "एकाग्रता में वृद्धि", "आध्यात्मिक जुड़ाव"],
    },
    {
      id: 13,
      title: language === "en" ? "Bhajan Sandhya" : "भजन संध्या",
      description: language === "en" 
        ? "Devotional evening songs and music." 
        : "सांध्य समय भजन की प्रस्तुति।",
      icon: <GiLotus className="text-3xl text-amber-400" />,
      duration: "2-3 " + (language === "en" ? "Hours" : "घंटे"),
      benefits: language === "en"
        ? ["Divine bliss", "Stress relief", "Cultural enrichment"]
        : ["दिव्य आनंद", "तनाव से मुक्ति", "सांस्कृतिक समृद्धि"],
    },
  ];

  const t = servicesText[language];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden">
      {/* Animated Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Devanagari Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-1/5 left-1/6 text-6xl opacity-5 text-white">ॐ</span>
        <span className="absolute top-2/3 right-1/4 text-8xl opacity-5 text-white">ॐ</span>
        <span className="absolute bottom-1/4 left-1/3 text-7xl opacity-5 text-white">ॐ</span>
        <span className="absolute top-1/3 left-1/2 text-6xl opacity-5 text-white">नमः शिवाय</span>
      </div>

      <Navbar />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              {t.heading}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-amber-100 max-w-2xl mx-auto">{t.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl overflow-hidden hover:shadow-xl transition duration-300 border border-purple-700/30 backdrop-blur-sm"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-amber-300">{service.title}</h2>
                </div>
                <p className="text-amber-100 mb-4">{service.description}</p>
                <div className="mb-4 text-amber-200">
                  <span className="font-semibold">{t.duration}:</span> {service.duration}
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-amber-300">{t.benefits}:</h4>
                  <ul className="list-disc pl-5 text-amber-100 space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-amber-600/20 to-amber-400/20">
                <button 
                  onClick={() => handleBookService(service.title)}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition duration-300"
                >
                  {t.book}
                </button>
              </div>
            </div>
          ))}
        </div>

        <br />

        <div className="mb-10 mx-auto w-full max-w-xl rounded-lg overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/uFD5hnKeT5c?rel=0&autoplay=1&mute=1&si=bYp4Ohjgr5fGVpPe"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
          ></iframe>
        </div>
        <br/>
        <div className="mb-10 mx-auto w-full max-w-xl rounded-lg overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/2Dl47X6gtX4?rel=0&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[250px] sm:h-[300px] md:h-[350px]"
          ></iframe>
        </div>

        <div className="mt-16 bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl p-8 border border-purple-700/30 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-amber-300 mb-6 text-center">{t.customHeading}</h2>
          <p className="text-amber-100 mb-6 text-center">{t.customText}</p>
          <div className="text-center">
            <button 
              onClick={() => handleBookService(language === "en" ? "Custom Service" : "कस्टम सेवा")}
              className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-3 px-8 rounded-lg hover:from-purple-700 hover:to-fuchsia-700 transition duration-300"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}