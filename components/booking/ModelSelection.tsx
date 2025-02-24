"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const modelsByBrand = {
  apple: [
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
    },
  ],
  samsung: [
    {
      id: "galaxy-s24",
      name: "Galaxy S24",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    },
    {
      id: "galaxy-s23",
      name: "Galaxy S23",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    },
    {
      id: "galaxy-s22",
      name: "Galaxy S22",
      image:
        "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800",
    },
  ],
  // Add more brands as needed
};

export function ModelSelection({
  brand,
  selected,
  onSelect,
  onBack,
}: {
  brand: string;
  selected: string;
  onSelect: (model: string) => void;
  onBack: () => void;
}) {
  const models = modelsByBrand[brand as keyof typeof modelsByBrand] || [];

  return (
    <div>
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6">Select your device model</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {models.map((model) => {
          const isSelected = selected === model.id;
          return (
            <Card
              key={model.id}
              className={`
                overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg
                ${isSelected ? "ring-2 ring-blue-600" : ""}
              `}
              onClick={() => onSelect(model.id)}
            >
              <div className="h-40 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${model.image})` }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center">{model.name}</h3>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
