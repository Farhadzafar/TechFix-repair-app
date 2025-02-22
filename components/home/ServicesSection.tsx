"use client";

import {
  Smartphone,
  Battery,
  Camera,
  Headphones,
  Wifi,
  Watch,
  Clock,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Screen Replacement",
    icon: Smartphone,
    description: "Fix cracked screens, dead pixels, and touch response issues",
    price: "45",
    time: "1-2 hours",
    image:
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070",
  },
  {
    title: "Battery Service",
    icon: Battery,
    description: "Restore your device's battery life and performance",
    price: "39",
    time: "30 mins",
    image:
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=1974",
  },
  {
    title: "Camera Repair",
    icon: Camera,
    description: "Fix blurry photos, focus issues, and camera malfunctions",
    price: "49",
    time: "1-2 hours",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1970",
  },
  {
    title: "Audio Repair",
    icon: Headphones,
    description: "Repair speakers, microphone, and audio-related issues",
    price: "35",
    time: "1 hour",
    image:
      "https://images.unsplash.com/photo-1563939526-62a8d4c4a36d?q=80&w=1974",
  },
  {
    title: "Connectivity Fix",
    icon: Wifi,
    description: "Solve Wi-Fi, Bluetooth, and cellular connection problems",
    price: "29",
    time: "1 hour",
    image:
      "https://images.unsplash.com/photo-1597225244660-1cd128c64284?q=80&w=1974",
  },
  {
    title: "Smartwatch Repair",
    icon: Watch,
    description: "Fix screens, batteries, and sensors on smartwatches",
    price: "59",
    time: "2 hours",
    image:
      "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?q=80&w=1970",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Popular Repair Services
          </h2>
          <p className="text-xl text-gray-600">
            Professional repairs for all your devices
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold">
          View All Services
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  icon: Icon,
  description,
  price,
  time,
  image,
}: {
  title: string;
  icon: React.ElementType;
  description: string;
  price: string;
  time: string;
  image: string;
}) {
  return (
    <Card className="overflow-hidden service-card">
      <div className="h-48 relative">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6 relative">
        <div className="absolute right-6 top-0 transform -translate-y-1/2">
          <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-500">From</span>
            <span className="text-2xl font-bold text-blue-600 ml-1">
              ${price}
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{time}</span>
          </div>
        </div>
        <Button className="w-full mt-4 cta-button">
          Book Now
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </Card>
  );
}
