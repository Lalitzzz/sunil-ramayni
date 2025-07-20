"use client";

import Navbar from "@/components/Navbar";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";



export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const spiritualQuotes = {
      en: "Om Shanti! I seek divine blessings through your services.",
      hi: "ॐ शांति! मैं आपकी सेवाओं के माध्यम से दिव्य आशीर्वाद चाहता हूं।"
    };
    
    const quote = language === 'hi' ? spiritualQuotes.hi : spiritualQuotes.en;
    
    const message = `*${t.messageTitle}*\n\n` +
                   `*${t.name}:* ${formData.name}\n` +
                   `*${t.phoneNumber}:* ${formData.phone}\n` +
                   `*${t.emailOptional}:* ${formData.email || 'N/A'}\n` +
                   `*${t.service}:* ${formData.service}\n` +
                   `*${t.message}:* ${formData.message}\n\n` +
                   `*${quote}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919610719306?text=${encodedMessage}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsAppClick();
  };

  const content = {
    en: {
      title: "Contact Pandit Ji",
      subtitle: "Get in touch for booking or any spiritual guidance",
      contactInfo: "Contact Information",
      phone: "Phone",
      email: "Email",
      address: "Address",
      availability: "Availability",
      timings: "Monday to Sunday: 7 AM - 9 PM",
      appointment: "(Prior appointment recommended)",
      messageTitle: "Send a Message",
      name: "Your Name",
      phoneNumber: "Phone Number",
      emailOptional: "Email (Optional)",
      service: "Service Interested In",
      message: "Your Message",
      select: "Select a service",
      services: [
        "Ramayan Path",
        "Bhagwat Katha",
        "Sunderkand Path",
        "Havan/Yagya",
        "Griha Pravesh Puja",
        "Other (Please specify)",
      ],
      phoneNumberValue: "+91 96107 19306",
      emailValue: "sunilkakra33@gmail.com",
      addressValue: "Nokha Jodha, Jayal, Nagaur, Rajasthan",
      button: "Send Message",
      whatsappText: "Message on WhatsApp",
    },
    hi: {
      title: "पंडित जी से संपर्क करें",
      subtitle: "बुकिंग या आध्यात्मिक मार्गदर्शन के लिए संपर्क करें",
      contactInfo: "संपर्क जानकारी",
      phone: "फ़ोन",
      email: "ईमेल",
      address: "पता",
      availability: "उपलब्धता",
      timings: "सोमवार से रविवार: सुबह 7 बजे - रात 9 बजे",
      appointment: "(पूर्व नियुक्ति अनुशंसित)",
      messageTitle: "संदेश भेजें",
      name: "आपका नाम",
      phoneNumber: "फ़ोन नंबर",
      emailOptional: "ईमेल (वैकल्पिक)",
      service: "आपकी सेवा रुचि",
      message: "आपका संदेश",
      select: "सेवा चुनें",
      services: [
        "रामायण पाठ",
        "भागवत कथा",
        "सुंदरकांड पाठ",
        "हवन/यज्ञ",
        "गृह प्रवेश पूजा",
        "अन्य (कृपया बताएं)",
      ],
      phoneNumberValue: "+91 96107 19306",
      emailValue: "sunilkakra33@gmail.com",
      addressValue: "नौखा जोधा, जयल, नागौर, राजस्थान",
      button: "संदेश भेजें",
      whatsappText: "WhatsApp पर संदेश भेजें",
    },
  };

  const t = language === "hi" ? content.hi : content.en;

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-1/5 left-1/6 text-6xl opacity-5 text-white">ॐ</span>
        <span className="absolute top-2/3 right-1/4 text-8xl opacity-5 text-white">राम</span>
        <span className="absolute bottom-1/4 left-1/3 text-7xl opacity-5 text-white">कृष्ण</span>
        <span className="absolute top-1/3 left-1/2 text-6xl opacity-5 text-white">हनुमान</span>
        <span className="absolute bottom-1/3 right-1/6 text-5xl opacity-5 text-white">शिव</span>
      </div>

      <Navbar />

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              {t.title}
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-amber-100 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl p-8 border border-purple-700/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-300 mb-6">{t.contactInfo}</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <FaPhone className="text-amber-400 text-xl mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-amber-200">{t.phone}</h3>
                  <p className="text-amber-100">{t.phoneNumberValue}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaEnvelope className="text-amber-400 text-xl mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-amber-200">{t.email}</h3>
                  <p className="text-amber-100">{t.emailValue}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-amber-400 text-xl mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-amber-200">{t.address}</h3>
                  <p className="text-amber-100">{t.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-amber-400 text-xl mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-amber-200">{t.availability}</h3>
                  <p className="text-amber-100">{t.timings}</p>
                  <p className="text-amber-100">{t.appointment}</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-4">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-md hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>{t.whatsappText}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-purple-800/30 to-indigo-900/40 rounded-2xl shadow-2xl p-8 border border-purple-700/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-amber-300 mb-6">{t.messageTitle}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-200">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-indigo-900/30 border border-purple-700/50 text-amber-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-200">
                  {t.phoneNumber}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-indigo-900/30 border border-purple-700/50 text-amber-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-200">
                  {t.emailOptional}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-indigo-900/30 border border-purple-700/50 text-amber-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-amber-200">
                  {t.service}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-indigo-900/30 border border-purple-700/50 text-amber-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                >
                  <option value="">{t.select}</option>
                  {t.services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-200">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-indigo-900/30 border border-purple-700/50 text-amber-100 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  required
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 px-4 rounded-md hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-300"
                >
                  {t.button}
                </button>
                
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-md hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



      {/* Floating WhatsApp Icon */}


    </div>
  );
}