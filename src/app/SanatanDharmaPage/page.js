'use client';
import { useLanguage } from "@/app/context/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function SanatanDharmaPage() {
  const { language } = useLanguage();

  const TEXT = {
    en: {
      title: "Sanatan Dharma - The Eternal Path",
      subtitle: "The timeless wisdom that sustains the universe",
      intro: "Sanatan Dharma, often called Hinduism, is not just a religion but a cosmic way of life that has flourished since time immemorial.",
      essence: "Sanatan Dharma is essential because it provides the complete roadmap for human evolution - physically, mentally and spiritually. It teaches us to live in harmony with cosmic laws, fulfill our duties while progressing spiritually, and ultimately realize our divine nature. This eternal wisdom is not bound by time or place, offering practical solutions for modern challenges while maintaining ancient truths.",
      sections: {
        whyImportant: "Why Sanatan Dharma Matters",
        importancePoints: [
          "Provides a complete framework for spiritual and material prosperity (Purusharthas: Dharma, Artha, Kama, Moksha)",
          "Teaches harmony between humanity and nature (Vasudhaiva Kutumbakam - World as one family)",
          "Offers scientific spirituality validated by modern research (Yoga, Meditation, Ayurveda)",
          "Preserves ancient wisdom while being adaptable to modern times (Eternal yet evolving)",
          "Promotes universal values of truth (Satya), non-violence (Ahimsa), and compassion (Karuna)",
          "Contains profound philosophical systems (Nyaya, Vaisheshika, Sankhya, Yoga, Mimamsa, Vedanta)",
          "Offers diverse paths to spiritual growth (Bhakti, Jnana, Karma, Raja Yoga)",
          "Celebrates diversity through multitude of deities representing cosmic principles"
        ],
        bhagavadGita: "Wisdom from Bhagavad Gita",
        gitaVerses: [
          {
            verse: "Chapter 2, Verse 47",
            text: "You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions."
          },
          {
            verse: "Chapter 6, Verse 5",
            text: "Elevate yourself through the power of your mind, and not degrade yourself, for the mind can be the friend and also the enemy of the self."
          },
          {
            verse: "Chapter 18, Verse 66",
            text: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."
          }
        ],
        vedicWisdom: "Vedic Wisdom - Dohas with Meaning",
        dohas: [
          {
            verse: "Asatoma Sadgamaya",
            text: "ॐ असतो मा सद्गमय (Lead me from falsehood to truth)",
            meaning: "A prayer for divine guidance to move from ignorance to wisdom, from darkness to light."
          },
          {
            verse: "Karmanye Vadhikaraste",
            text: "कर्मण्येवाधिकारस्ते (You have right only to action)",
            meaning: "Focus on performing your duty without attachment to results - the essence of Karma Yoga."
          },
          {
            verse: "Vidya Dadati Vinayam",
            text: "विद्या ददाति विनयम् (Knowledge brings humility)",
            meaning: "True education leads to humility, which brings character, wealth, and ultimately liberation."
          },
          {
            verse: "Ahimsa Paramo Dharma",
            text: "अहिंसा परमो धर्मः (Non-violence is the supreme duty)",
            meaning: "The highest principle of living is causing no harm to any being through thought, word or deed."
          }
        ],
        scientificRoots: "Scientific Foundations of Sanatan Dharma",
        scientificPoints: [
          "Concept of cosmic cycles (Yugas) matching modern cosmology",
          "Atomic theory in Vaisheshika philosophy (2,600 years ago)",
          "Advanced mathematics including zero and decimal system",
          "Detailed human anatomy in Ayurvedic texts",
          "Environmental conservation principles in ancient texts"
        ],
        awaken: "Awakening the World to Eternal Truths",
        awakenContent: "In today's materialistic world, Sanatan Dharma offers the balm of spiritual wisdom. Our mission is to spread this divine knowledge to seekers worldwide.",
        callToAction: "Join us in preserving and propagating this eternal wisdom"
      },
      buttons: {
        learnMore: "Learn More",
        contact: "Contact Us"
      }
    },
    hi: {
      title: "सनातन धर्म - शाश्वत मार्ग",
      subtitle: "अनंत काल से चली आ रही शाश्वत ज्ञान की धारा",
      intro: "सनातन धर्म, जिसे हिंदू धर्म भी कहा जाता है, केवल एक धर्म नहीं बल्कि एक विश्वव्यापी जीवन पद्धति है जो अनादि काल से विद्यमान है।",
      essence: "सनातन धर्म इसलिए आवश्यक है क्योंकि यह मानव विकास का पूर्ण मार्गदर्शन प्रदान करता है - शारीरिक, मानसिक और आध्यात्मिक रूप से। यह हमें ब्रह्मांडीय नियमों के साथ सामंजस्य में रहना, अपने कर्तव्यों का पालन करते हुए आध्यात्मिक प्रगति करना और अंततः अपने दिव्य स्वरूप को पहचानना सिखाता है। यह शाश्वत ज्ञान समय या स्थान से बंधा नहीं है, जो आधुनिक चुनौतियों के लिए व्यावहारिक समाधान प्रदान करते हुए प्राचीन सत्यों को बनाए रखता है।",
      sections: {
        whyImportant: "सनातन धर्म क्यों महत्वपूर्ण है",
        importancePoints: [
          "आध्यात्मिक और भौतिक समृद्धि के लिए संपूर्ण ढांचा प्रदान करता है (पुरुषार्थ: धर्म, अर्थ, काम, मोक्ष)",
          "मानवता और प्रकृति के बीच सामंजस्य सिखाता है (वसुधैव कुटुम्बकम - विश्व एक परिवार)",
          "आधुनिक शोध द्वारा प्रमाणित वैज्ञानिक आध्यात्मिकता प्रदान करता है (योग, ध्यान, आयुर्वेद)",
          "प्राचीन ज्ञान को संरक्षित करते हुए आधुनिक समय के अनुकूल बनाता है (शाश्वत किन्तु विकासशील)",
          "सत्य, अहिंसा और करुणा के सार्वभौमिक मूल्यों को बढ़ावा देता है",
          "गहन दार्शनिक प्रणालियाँ समाहित हैं (न्याय, वैशेषिक, सांख्य, योग, मीमांसा, वेदांत)",
          "आध्यात्मिक विकास के विविध मार्ग प्रदान करता है (भक्ति, ज्ञान, कर्म, राज योग)",
          "ब्रह्मांडीय सिद्धांतों का प्रतिनिधित्व करने वाले देवताओं के माध्यम से विविधता का उत्सव"
        ],
        bhagavadGita: "भगवद गीता का ज्ञान",
        gitaVerses: [
          {
            verse: "अध्याय 2, श्लोक 47",
            text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥"
          },
          {
            verse: "अध्याय 6, श्लोक 5",
            text: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥"
          },
          {
            verse: "अध्याय 18, श्लोक 66",
            text: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥"
          }
        ],
        vedicWisdom: "वैदिक ज्ञान - दोहा और अर्थ",
        dohas: [
          {
            verse: "असतो मा सद्गमय",
            text: "ॐ असतो मा सद्गमय (मुझे असत्य से सत्य की ओर ले चलो)",
            meaning: "अज्ञान से ज्ञान की ओर, अंधकार से प्रकाश की ओर ले जाने की दिव्य प्रार्थना।"
          },
          {
            verse: "कर्मण्येवाधिकारस्ते",
            text: "कर्मण्येवाधिकारस्ते (तुम्हारा अधिकार केवल कर्म पर है)",
            meaning: "फल की इच्छा किए बिना अपने कर्तव्य का पालन करो - कर्म योग का सार।"
          },
          {
            verse: "विद्या ददाति विनयम",
            text: "विद्या ददाति विनयम् (ज्ञान विनम्रता लाता है)",
            meaning: "सच्ची शिक्षा विनम्रता लाती है, जो चरित्र, धन और अंततः मोक्ष प्रदान करती है।"
          },
          {
            verse: "अहिंसा परमो धर्म",
            text: "अहिंसा परमो धर्मः (अहिंसा सर्वोच्च धर्म है)",
            meaning: "जीवन का सर्वोच्च सिद्धांत है - विचार, वचन या कर्म से किसी को भी हानि न पहुँचाना।"
          }
        ],
        scientificRoots: "सनातन धर्म की वैज्ञानिक नींव",
        scientificPoints: [
          "ब्रह्मांडीय चक्रों (युग) की अवधारणा जो आधुनिक ब्रह्माण्ड विज्ञान से मेल खाती है",
          "वैशेषिक दर्शन में परमाणु सिद्धांत (2,600 वर्ष पूर्व)",
          "शून्य और दशमलव प्रणाली सहित उन्नत गणित",
          "आयुर्वेदिक ग्रंथों में मानव शरीर रचना का विस्तृत वर्णन",
          "प्राचीन ग्रंथों में पर्यावरण संरक्षण के सिद्धांत"
        ],
        awaken: "शाश्वत सत्यों की ओर विश्व को जागृत करना",
        awakenContent: "आज की भौतिकवादी दुनिया में, सनातन धर्म आध्यात्मिक ज्ञान की शांति प्रदान करता है। हमारा मिशन इस दिव्य ज्ञान को दुनिया भर के साधकों तक पहुँचाना है।",
        callToAction: "इस शाश्वत ज्ञान को संरक्षित और प्रसारित करने में हमारे साथ जुड़ें"
      },
      buttons: {
        learnMore: "अधिक जानें",
        contact: "संपर्क करें"
      }
    }
  };

  const t = TEXT[language];

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-800 overflow-hidden min-h-screen">
      {/* Animated Glow Elements */}
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600 rounded-full mix-blend-screen opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating and Moving Devanagari Characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute top-1/5 text-6xl opacity-5 text-white animate-moveHorizontal">ॐ</span>
        <span className="absolute top-1/3 left-1/4 text-7xl opacity-5 text-white animate-moveDiagonal">धर्म</span>
        <span className="absolute bottom-1/4 right-1/4 text-8xl opacity-5 text-white animate-moveVertical">सत्य</span>
        <span className="absolute top-1/2 left-1/2 text-6xl opacity-5 text-white animate-circularMotion">वसुधैव कुटुम्बकम</span>
        <span className="absolute bottom-1/3 left-1/4 text-7xl opacity-5 text-white animate-moveRightToLeft">योग</span>
      </div>
<div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-24 sm:px-6 lg:px-8 mt-16">

        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
              {t.title}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-amber-200">{t.subtitle}</p>
        </div>

        {/* Ganeshji Image */}
       <div className="flex justify-center my-12">
  <div className="flex justify-center my-12">
  <div className="w-82 h-110 rounded-full overflow-hidden border-4 border-amber-400/30 animate-float glow-amber">
    <Image
      src="/images/shivaaa.jpg"
      alt="Lord Shiva"
      width={500}
      height={500}
      className="w-full h-full object-cover"
      priority
    />
  </div>
</div>

</div>


        {/* Introduction */}
        <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-16 border border-purple-400/20">
          <p className="text-lg md:text-xl text-amber-100 text-center">
            {t.intro}
          </p>
        </div>

        {/* Essence of Sanatan Dharma */}
        <div className="bg-indigo-900/40 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-16 border border-indigo-400/20">
          <p className="text-lg md:text-xl text-amber-100 text-center">
            {t.essence}
          </p>
        </div>

        {/* Why Important Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 text-center">
            {t.sections.whyImportant}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.sections.importancePoints.map((point, index) => (
              <div key={index} className="bg-indigo-900/40 p-6 rounded-lg border border-fuchsia-400/20 hover:bg-indigo-900/60 transition-all duration-300">
                <div className="flex items-start">
                  <div className="text-amber-400 text-2xl mr-4">ॐ</div>
                  <p className="text-lg text-amber-100">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bhagavad Gita Section */}
        <div className="bg-amber-900/20 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-16 border border-amber-400/20">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 text-center">
            {t.sections.bhagavadGita}
          </h2>
          <div className="space-y-6">
            {t.sections.gitaVerses.map((verse, index) => (
              <div key={index} className="bg-purple-900/30 p-6 rounded-lg">
                <p className="text-lg font-semibold text-amber-300 mb-2">{verse.verse}</p>
                <p className="text-lg text-amber-100">{verse.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vedic Wisdom - Dohas Section */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-16 border border-purple-400/20">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 text-center">
            {t.sections.vedicWisdom}
          </h2>
          <div className="space-y-6">
            {t.sections.dohas.map((doha, index) => (
              <div key={index} className="bg-indigo-900/30 p-6 rounded-lg">
                <p className="text-lg font-semibold text-amber-300 mb-1">{doha.verse}</p>
                <p className="text-xl text-white mb-2 font-medium">{doha.text}</p>
                <p className="text-md text-amber-100 italic">"{doha.meaning}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Roots Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 text-center">
            {t.sections.scientificRoots}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.sections.scientificPoints.map((point, index) => (
              <div key={index} className="bg-fuchsia-900/30 p-6 rounded-lg border border-amber-400/20 hover:bg-fuchsia-900/40 transition-all duration-300">
                <div className="flex items-start">
                  <div className="text-purple-400 text-2xl mr-4">⌬</div>
                  <p className="text-lg text-amber-100">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Krishna Image */}
        <div className="flex justify-center my-16">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-purple-400/30 animate-swing">
            <Image
              src="/images/krishnaji.jpg"
              alt="Lord Krishna"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Awakening Section */}
        <div className="bg-fuchsia-900/30 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-16 border border-fuchsia-400/20">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6 text-center">
            {t.sections.awaken}
          </h2>
          <p className="text-lg md:text-xl text-amber-100 mb-6">
            {t.sections.awakenContent}
          </p>
          <p className="text-xl md:text-2xl text-amber-200 font-semibold text-center">
            {t.sections.callToAction}
          </p>
        </div>

        {/* Zodiac Image */}
        <div className="flex justify-center my-16">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg animate-spin-slow border-4 border-purple-400/30">
            <Image
              src="/images/zodhindi.jpg"
              alt="Zodiac"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl text-amber-200 mb-8">
            {t.sections.callToAction}
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/about"
              className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-full hover:from-amber-300 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/40"
            >
              {t.buttons.learnMore}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-amber-400 text-amber-300 font-bold rounded-full hover:bg-amber-400/10 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-400/20"
            >
              {t.buttons.contact}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}