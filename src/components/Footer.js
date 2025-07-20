'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaOm,
} from "react-icons/fa";


export default function Footer() {
  const { language } = useLanguage();

  const text = {
    en: {
      aboutTitle: "Shri Shanti",
      aboutDesc:
        "Providing authentic Vedic rituals and spiritual guidance since 2015. Our mission is to connect devotees with divine energy through sacred ceremonies.",
      quickLinks: "Quick Links",
      servicesTitle: "Our Services",
      contactUs: "Contact Us",
      links: {
        home: "Home",
        about: "About Pandit Ji",
        services: "Our Services",
        contact: "Contact Us",
        ramayan: "Ramayan Path",
        bhagwat: "Bhagwat Katha",
        havan: "Havan/Yagya",
        griha: "Griha Pravesh Puja",
      },
      contact: {
        phone: "+91 9610719306",
        email: "sunilkakra33@gmail.com",
        address: "Nokha Jodha (Jayal), Nagaur, Rajasthan India",
        time: "7:00 AM - 9:00 PM (Daily)",
      },
      copyright:
        "© " +
        new Date().getFullYear() +
        " sunil ramayni's. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    hi: {
      aboutTitle: "श्री शांति",
      aboutDesc:
        "2015 से प्रामाणिक वैदिक अनुष्ठानों और आध्यात्मिक मार्गदर्शन की सेवा दे रहे हैं। हमारा उद्देश्य श्रद्धालुओं को पवित्र अनुष्ठानों के माध्यम से दिव्य ऊर्जा से जोड़ना है।",
      quickLinks: "त्वरित लिंक",
      servicesTitle: "हमारी सेवाएं",
      contactUs: "संपर्क करें",
      links: {
        home: "होम",
        about: "पंडित जी के बारे में",
        services: "हमारी सेवाएं",
        contact: "संपर्क करें",
        ramayan: "रामायण पाठ",
        bhagwat: "भागवत कथा",
        havan: "हवन/यज्ञ",
        griha: "गृह प्रवेश पूजा",
      },
      contact: {
        phone: "+91 9610719306",
        email: "sunilkakra33@gmail.com",
        address: "नौखा जोधा (जयाल), नागौर, राजस्थान भारत",
        time: "प्रातः 7:00 से रात्रि 9:00 तक (प्रतिदिन)",
      },
      copyright:
        "© " +
        new Date().getFullYear() +
        " सुनील रामायणी। सर्वाधिकार सुरक्षित।",
      privacy: "गोपनीयता नीति",
      terms: "सेवा की शर्तें",
    },
  }[language];

  return (
    <footer className="relative bg-gradient-to-b from-indigo-900 to-purple-900 pt-16 pb-8 overflow-hidden">
      {/* Background and OM Icons remain same */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center">
              <FaOm className="mr-2" /> {text.aboutTitle}
            </h3>
            <p className="text-purple-100 mb-4">{text.aboutDesc}</p>
            <div className="flex space-x-4">
              <a href="#"><FaFacebook className="text-xl text-purple-200 hover:text-amber-400" /></a>
              <a href="#"><FaInstagram className="text-xl text-purple-200 hover:text-amber-400" /></a>
              <a href="#"><FaYoutube className="text-xl text-purple-200 hover:text-amber-400" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-300 mb-6">{text.quickLinks}</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-purple-100 hover:text-amber-400">{text.links.home}</Link></li>
              <li><Link href="/about" className="text-purple-100 hover:text-amber-400">{text.links.about}</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-400">{text.links.services}</Link></li>
              <li><Link href="/contact" className="text-purple-100 hover:text-amber-400">{text.links.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-amber-300 mb-6">{text.servicesTitle}</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-purple-100 hover:text-amber-400">{text.links.ramayan}</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-400">{text.links.bhagwat}</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-400">{text.links.havan}</Link></li>
              <li><Link href="/services" className="text-purple-100 hover:text-amber-400">{text.links.griha}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-amber-300 mb-6">{text.contactUs}</h3>
            <ul className="space-y-4 text-purple-100">
              <li className="flex"><FaPhone className="text-amber-400 mt-1 mr-3" />{text.contact.phone}</li>
              <li className="flex"><FaEnvelope className="text-amber-400 mt-1 mr-3" />{text.contact.email}</li>
              <li className="flex"><FaMapMarkerAlt className="text-amber-400 mt-1 mr-3" />{text.contact.address}</li>
              <li className="flex"><FaClock className="text-amber-400 mt-1 mr-3" />{text.contact.time}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-700/50 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm mb-4 md:mb-0">{text.copyright}</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-purple-300 hover:text-amber-400 text-sm">{text.privacy}</Link>
            <Link href="/terms" className="text-purple-300 hover:text-amber-400 text-sm">{text.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
