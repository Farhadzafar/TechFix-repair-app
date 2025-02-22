"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { CTASection } from "@/components/home/CTASection";
import Manuals from "@/components/home/Manuals";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <Manuals />
      <BrandsSection />
      <CTASection />
      <TestimonialsSection />
    </main>
  );
}
