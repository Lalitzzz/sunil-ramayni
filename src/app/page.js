



"use client"
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar /> 
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <Footer/>
    </div>
  );
}