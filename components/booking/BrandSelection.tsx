"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const brandsByDevice = {
  smartphone: [
    {
      id: "apple",
      name: "Apple",
      image:
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
    },
    {
      id: "samsung",
      name: "Samsung",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    },
    {
      id: "google",
      name: "Google",
      image:
        "https://images.unsplash.com/photo-1605556243269-dd783645dc19?w=800",
    },
    {
      id: "huawei",
      name: "Huawei",
      image:
        "https://images.unsplash.com/photo-1595941069915-4ebc5197c14a?w=800",
    },
  ],
  laptop: [
    {
      id: "apple",
      name: "Apple",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=800",
    },
    {
      id: "dell",
      name: "Dell",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
    },
    {
      id: "hp",
      name: "HP",
      image:
        "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?w=800",
    },
    {
      id: "lenovo",
      name: "Lenovo",
      image:
        "https://images.unsplash.com/photo-1585247226801-bc613c441316?w=800",
    },
  ],
  // Add more device categories as needed
};

export function BrandSelection({
  deviceType,
  selected,
  onSelect,
  onBack,
}: {
  deviceType: string;
  selected: string;
  onSelect: (brand: string) => void;
  onBack: () => void;
}) {
  const brands =
    brandsByDevice[deviceType as keyof typeof brandsByDevice] || [];

  return (
    <div>
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6">Select your device brand</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand) => {
          const isSelected = selected === brand.id;
          return (
            <Card
              key={brand.id}
              className={`
                overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg
                ${isSelected ? "ring-2 ring-blue-600" : ""}
              `}
              onClick={() => onSelect(brand.id)}
            >
              <div className="h-32 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${brand.image})` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">{brand.name}</h3>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
