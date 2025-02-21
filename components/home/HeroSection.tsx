"use client";

import { PenTool as Tool, Search, Star } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center hero-pattern">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-float mb-8">
            <Tool className="h-16 w-16 mx-auto text-blue-400 mb-4" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl mb-6">
            Expert Device Repair
            <span className="block gradient-text mt-2">You Can Trust</span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
            Professional repairs with lifetime warranty. Fast, reliable, and trusted by thousands.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    className="pl-10 h-12 text-lg bg-white/95 backdrop-blur-lg border-2 border-blue-100/20" 
                    placeholder="Search your device or brand (e.g., iPhone 13, Samsung)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="px-8 h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
                  Find Repair
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatsCard value="50K+" label="Repairs Done" />
            <StatsCard 
              value="4.9" 
              label="Customer Rating"
              icon={
                <div className="flex justify-center gap-1 mb-2">
                  {[1,2,3,4,5].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              }
            />
            <StatsCard value="90d" label="Warranty" />
            <StatsCard value="15m" label="Response Time" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsCard({ value, label, icon }: { value: string; label: string; icon?: React.ReactNode }) {
  return (
    <div className="stats-item">
      <p className="text-5xl font-bold text-white mb-2">{value}</p>
      {icon}
      <p className="text-blue-200">{label}</p>
    </div>
  );
}