"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronRight,
  Shield,
  Clock,
  PenTool as Tool,
  DollarSign,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Monitor,
  Headphones,
  Gamepad,
  Camera,
  Printer,
  Tv,
  Speaker,
  Wifi,
  Star,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Mobile Devices",
    icon: <Smartphone className="w-6 h-6" />,
    services: [
      {
        title: "Screen Replacement",
        description:
          "Fix cracked screens, dead pixels, and touch response issues",
        price: "From $49",
        time: "1-2 hours",
        image:
          "https://images.unsplash.com/photo-1612100577176-a033bef2f78c?auto=format&fit=crop&q=80&w=1974",
        features: ["Genuine parts", "90-day warranty", "Free diagnostics"],
      },
      {
        title: "Battery Replacement",
        description: "Restore your device's battery life and performance",
        price: "From $39",
        time: "30-60 mins",
        image:
          "https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&q=80&w=2070",
        features: ["OEM batteries", "Same-day service", "Performance test"],
      },
      {
        title: "Water Damage Repair",
        description: "Professional water damage treatment and component repair",
        price: "From $89",
        time: "24-48 hours",
        image:
          "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=2070",
        features: [
          "Ultrasonic cleaning",
          "Component-level repair",
          "Data recovery",
        ],
      },
    ],
  },
  {
    name: "Computers",
    icon: <Laptop className="w-6 h-6" />,
    services: [
      {
        title: "Hardware Upgrade",
        description: "RAM, SSD, and component upgrades for better performance",
        price: "From $79",
        time: "1-3 hours",
        image:
          "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=2070",
        features: [
          "Premium components",
          "Performance testing",
          "Data migration",
        ],
      },
      {
        title: "Virus Removal",
        description: "Complete system cleanup and security enhancement",
        price: "From $69",
        time: "2-4 hours",
        image:
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
        features: ["Malware removal", "Security setup", "System optimization"],
      },
    ],
  },
  {
    name: "Gaming Consoles",
    icon: <Gamepad className="w-6 h-6" />,
    services: [
      {
        title: "HDMI Port Repair",
        description: "Fix loose or damaged HDMI ports for clear display",
        price: "From $89",
        time: "2-3 hours",
        image:
          "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&q=80&w=2069",
        features: ["Port replacement", "Display testing", "Cleaning service"],
      },
    ],
  },
];

const benefits = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Lifetime Warranty",
    description: "All repairs backed by our comprehensive warranty",
  },
  {
    icon: <Tool className="w-8 h-8 text-green-600" />,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience",
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-600" />,
    title: "Quick Turnaround",
    description: "Most repairs completed same-day",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-purple-600" />,
    title: "Price Match",
    description: "We'll match any competitor's price",
  },
];

export default function Service() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
        </div>

        <div className="relative flex flex-col justify-center items-center container mx-auto px-4">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Professional Device Repair Services
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert repairs for all your devices with lifetime warranty and
              same-day service available.
            </p>

            {/* Search Bar */}
            {/* <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div> */}
          </div>

          {/* ///////////////////////////////// */}
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4  bg-white rounded-xl shadow-lg overflow-hidden px-6 py-2"
                >
                  <div className="bg-gray-50 p-3 rounded-xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <section className="py-12 bg-white border-b">
        
      </section> */}

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-blue-100 p-2 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {service.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-gray-600"
                          >
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-5 h-5 mr-2 text-blue-600" />
                          {service.time}
                        </div>
                        <Link
                          href="/book"
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your device repaired by certified technicians with our lifetime
            warranty guarantee.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Book a Repair
            </button>
            <button className="text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
