"use client";
import { BrandsSection } from "@/components/home/BrandsSection";
import { Filter } from "lucide-react";
import React, { useState } from "react";
const categories = [
  "All Brands",
  "Smartphones",
  "Tablets",
  "Laptops",
  "Gaming",
  "Smart Home",
];
export default function Brands() {
  const [selectedCategory, setSelectedCategory] = useState("All Brands");
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </div>

        <div className="relative flex flex-col justify-center items-center text-center container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Repair Services for All Major Brands
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose your device brand to get started with professional repair
              services backed by our lifetime warranty.
            </p>

            {/* Search Bar */}
            {/* <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search brands..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="pt-12 pb-2 border-b m-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-md whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4">
        <BrandsSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Brand Repair Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re certified to repair all major brands with genuine parts
              and expert technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Genuine Parts
              </h3>
              <p className="text-gray-600">
                We use only authentic, brand-specific parts for all repairs to
                maintain your device&apos;s integrity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certified Technicians
              </h3>
              <p className="text-gray-600">
                Our technicians are certified by major brands and regularly
                updated with the latest repair techniques.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Warranty Coverage
              </h3>
              <p className="text-gray-600">
                All brand repairs come with our comprehensive warranty for your
                peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
