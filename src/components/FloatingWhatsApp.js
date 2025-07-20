"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  
  const handleClick = () => {
    const message = language === 'hi' 
      ? "नमस्ते पंडित जी, मुझे आपकी सेवाओं के बारे में जानकारी चाहिए। ॐ शांति!"
      : "Hello Pandit Ji, I would like information about your services. Om Shanti!";
    
    window.open(`https://wa.me/919610719306?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative">
        <div className="absolute -inset-2 bg-green-500 rounded-full opacity-75 animate-ping"></div>
        <div className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300">
          <FaWhatsapp className="text-3xl" />
        </div>
      </div>
    </div>
  );
}