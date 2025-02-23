"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BrandsSection } from "@/components/home/BrandsSection";
import { CTASection } from "@/components/home/CTASection";
import Manuals from "@/components/home/Manuals";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Choose Your Brand
            </h2>
            <p className="text-xl text-gray-600">
              We provide expert repair services for all major brands and
              devices. Select your brand to get started.
            </p>
          </div>
          <BrandsSection />
          <div className="text-center mt-12">
            <Link
              href="/brands"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold"
            >
              View All Brands
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      <FeaturesSection />
      <section className="bg-white py-24">
        <div className=" container mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Popular Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional repairs for all your devices
            </p>
          </div>
          <ServicesSection />
          <div className="text-center mt-12">
            <Link
              href="/service"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Manuals />
      <CTASection />
      <TestimonialsSection />
    </main>
  );
}
