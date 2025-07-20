"use client";

import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import { useState } from "react";
import {
  FaPhone,
  FaBookOpen,
  FaHome,
  FaUser,
  FaEnvelope,
  FaTimes,
  FaBars,
} from "react-icons/fa";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const TEXT = {
    en: {
      home: "Home",
      services: "Services",
      contact: "Contact",
      about: "About",
      language: "हिंदी",
      call: "Call Now",
      menu: "Menu",
    },
    hi: {
      home: "मुख्य पृष्ठ",
      services: "सेवाएं",
      contact: "संपर्क करें",
      about: "परिचय",
      language: "English",
      call: "कॉल करें",
      menu: "मेन्यू",
    },
  };

  const t = TEXT[language];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {language === "hi" ? "सुनील रामायणी" : "Sunil Ramayani"}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-2 py-1"
              title={t.home}
            >
              <FaHome className="inline mr-1" />
              <span className="hidden sm:inline">{t.home}</span>
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-2 py-1"
              title={t.about}
            >
              <FaUser className="inline mr-1" />
              <span className="hidden sm:inline">{t.about}</span>
            </Link>
            <Link
              href="/services"
              className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-2 py-1"
              title={t.services}
            >
              <FaBookOpen className="inline mr-1" />
              <span className="hidden sm:inline">{t.services}</span>
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium px-2 py-1"
              title={t.contact}
            >
              <FaEnvelope className="inline mr-1" />
              <span className="hidden sm:inline">{t.contact}</span>
            </Link>

            <div className="flex items-center space-x-2 ml-2">
              <a
                href="tel:+919876543210"
                className="text-xs py-1.5 px-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
                title={t.call}
              >
                <FaPhone className="mr-1" />
                <span className="hidden sm:inline">{t.call}</span>
              </a>
              <button
                onClick={toggleLanguage}
                className="text-xs bg-amber-500 text-white px-3 py-1.5 rounded-md hover:bg-amber-600 transition"
                title={language === "hi" ? "Switch to English" : "हिंदी में बदलें"}
              >
                {t.language}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <button
              onClick={toggleLanguage}
              className="text-xs bg-amber-500 text-white px-2 py-1 rounded-md hover:bg-amber-600 transition"
            >
              {t.language}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
              aria-label={t.menu}
            >
              {isOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-1 pb-2 space-y-1 sm:px-2 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 flex items-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaHome className="mr-2 text-xs" /> {t.home}
          </Link>
          <Link
            href="/about"
            className="block px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 flex items-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaUser className="mr-2 text-xs" /> {t.about}
          </Link>
          <Link
            href="/services"
            className="block px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 flex items-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaBookOpen className="mr-2 text-xs" /> {t.services}
          </Link>
          <Link
            href="/contact"
            className="block px-2 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-white hover:bg-purple-600 flex items-center transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FaEnvelope className="mr-2 text-xs" /> {t.contact}
          </Link>
          <a
            href="tel:+919610719306"       
            className="block px-2 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mt-1 transition-colors"
            onClick={() => setIsOpen(false)}
            title={t.call}
          >
            <FaPhone className="mr-2 text-xs" /> {t.call}
          </a>
        </div>
      </div>
    </nav>
  );
}
