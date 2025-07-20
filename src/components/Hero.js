'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import ZodiacRotator from "./ZodiacRotator";
import Image from "next/image";

export default function Hero() {
  const { language } = useLanguage();

  const TEXT = {
    en: {
      title1: "Divine Spiritual",
      subtitle: "Experience the divine with authentic Vedic rituals performed by our experienced Pandit Ji for your spiritual needs.",
      button1: "Our Services",
      button2: "Book Now",
    },
    hi: {
      title1: "दिव्य आध्यात्मिक",
      subtitle: "हमारे अनुभवी पंडित जी द्वारा किए गए प्रामाणिक वैदिक अनुष्ठानों के साथ दिव्यता का अनुभव करें।",
      button1: "हमारी सेवाएं",
      button2: "अभी बुक करें",
    },
  };

  const t = TEXT[language];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden min-h-[80vh] flex items-center">
      {/* Animated Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating and Moving Devanagari Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-1/5 text-6xl opacity-5 text-white animate-moveHorizontal">ॐ</span>
        <span className="absolute top-1/3 left-1/4 text-7xl opacity-5 text-white animate-moveDiagonal">राम</span>
        <span className="absolute bottom-1/4 right-1/4 text-8xl opacity-5 text-white animate-moveVertical">हनुमान</span>
        <span className="absolute top-1/2 left-1/2 text-6xl opacity-5 text-white animate-circularMotion">कृष्ण</span>
        <span className="absolute bottom-1/3 left-1/4 text-7xl opacity-5 text-white animate-moveRightToLeft">शिव</span>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 text-center w-full" style={{ marginTop: '4rem' }}>
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            {t.title1}
          </span>
        </h1>

        {/* Ganeshji Image - Centered */}
        <div className="flex justify-center my-6">
          <div className="w-92 h-72 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-amber-400/30">
            <Image
              src="/images/ganeshji.jpg"
              alt="Lord Ganesha"
              width={700}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-amber-100 mb-6 max-w-3xl mx-auto px-4">
          {t.subtitle}
        </p>

        {/* YouTube Video Embed */}
        <div className="mb-8 mx-auto w-full max-w-xl rounded-lg overflow-hidden shadow-2xl">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/UJaqKqpigmQ?rel=0&autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[200px] sm:h-[250px] md:h-[300px]"
          ></iframe>
        </div>

        {/* Zodiac Rotator - Centered */}
        <div className="flex justify-center my-6">
          <div className="w-92 h-88 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg animate-spin-slow border-4 border-purple-400/30">
            <Image
              src="/images/zodhindi.jpg"
              alt="Rotating zodiac image"
              width={700}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Krishnaji Image - Centered */}
        <div className="flex justify-center my-6">
  <div className="w-92 h-88 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg  animate-swing">
    <Image
      src="/images/krishnaji.jpg"
      alt="Lord Krishna"
      width={700}
      height={800}
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8">
          <Link
            href="/services"
            className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/40 text-sm sm:text-base"
          >
            {t.button1}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-amber-400 text-amber-300 font-bold rounded-full hover:bg-amber-400/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/20 text-sm sm:text-base"
          >
            {t.button2}
          </Link>
        </div>
      </div>
    </div>
  );
}