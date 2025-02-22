// import { Apple, Smartphone, Laptop, LampDesk as Desktop, Tablet } from 'lucide-react';
// import { Card } from "@/components/ui/card";
// import Link from 'next/link';

// const brands = [
//   { name: "Apple", icon: Apple, devices: "iPhone, iPad, MacBook" },
//   { name: "Samsung", icon: Smartphone, devices: "Galaxy S, Note, Tab" },
//   { name: "Google", icon: Smartphone, devices: "Pixel, Nexus" },
//   { name: "Sony", icon: Laptop, devices: "Xperia, PlayStation" },
//   { name: "Microsoft", icon: Desktop, devices: "Surface, Xbox" },
//   { name: "Huawei", icon: Tablet, devices: "P30, Mate, MediaPad" }
// ];

// export function BrandsSection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold gradient-text mb-4">Choose Your Brand</h2>
//           <p className="text-xl text-gray-600">
//             Expert repair services for all major brands and devices
//           </p>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//           {brands.map((brand, index) => (
//             <BrandCard key={index} {...brand} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function BrandCard({ name, icon: Icon, devices }: {
//   name: string;
//   icon: React.ElementType;
//   devices: string;
// }) {
//   return (
//     <Link href="#">
//       <Card className="p-6 text-center brand-card">
//         <Icon className="h-12 w-12 mx-auto mb-4 text-gray-600" />
//         <h3 className="font-semibold text-lg mb-2">{name}</h3>
//         <p className="text-sm text-gray-500 mb-3">{devices}</p>
//         <p className="text-sm font-medium text-blue-600">View repairs →</p>
//       </Card>
//     </Link>
//   );
// }

// //////////////////////////////////////////////////
"use client";
import { brands } from "@/public/data/data";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
export function BrandsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Choose Your Brand
          </h2>
          <p className="text-xl text-gray-600">
            We provide expert repair services for all major brands and devices.
            Select your brand to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <Link
              key={index}
              href={`/brands/${brand.name.toLowerCase()}`}
              className={`${brand.bgColor} rounded-xl p-8 transition-transform hover:scale-105 group bg-blue-100`}
            >
              <div className="flex items-center justify-between mb-6">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="h-12 object-contain"
                />
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {brand.name}
              </h3>
              <p className="text-gray-600">{brand.devices}</p>
              <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                View repair options
                <ChevronRight className="w-5 h-5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center font-semibold">
            View All Brands
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
