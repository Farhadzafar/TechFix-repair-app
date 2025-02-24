"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Smartphone,
  Battery,
  Camera,
  Headphones,
  Wifi,
  Wrench,
} from "lucide-react";

const repairServices = {
  "iphone-15-pro": [
    {
      id: "screen",
      name: "Screen Replacement",
      icon: Smartphone,
      price: 299,
      duration: "2 hours",
      description:
        "Fix cracked screens, dead pixels, and touch response issues",
    },
    {
      id: "battery",
      name: "Battery Replacement",
      icon: Battery,
      price: 89,
      duration: "1 hour",
      description: "Restore your device's battery life and performance",
    },
    {
      id: "camera",
      name: "Camera Repair",
      icon: Camera,
      price: 149,
      duration: "1.5 hours",
      description: "Fix blurry photos, focus issues, and camera malfunctions",
    },
    {
      id: "audio",
      name: "Audio Repair",
      icon: Headphones,
      price: 79,
      duration: "1 hour",
      description: "Repair speakers, microphone, and audio-related issues",
    },
    {
      id: "connectivity",
      name: "Connectivity Fix",
      icon: Wifi,
      price: 69,
      duration: "1 hour",
      description: "Solve Wi-Fi, Bluetooth, and cellular connection problems",
    },
    {
      id: "other",
      name: "Other Repairs",
      icon: Wrench,
      price: 49,
      duration: "Varies",
      description: "Other hardware or software issues",
    },
  ],
  // Add more models as needed
};

export function RepairSelection({
  model,
  selected,
  onSelect,
  onBack,
}: {
  model: string;
  selected: string[];
  onSelect: (repairs: string[]) => void;
  onBack: () => void;
}) {
  const [selectedRepairs, setSelectedRepairs] = useState<string[]>(selected);
  const repairs = repairServices[model as keyof typeof repairServices] || [];

  const toggleRepair = (repairId: string) => {
    const newSelected = selectedRepairs.includes(repairId)
      ? selectedRepairs.filter((id) => id !== repairId)
      : [...selectedRepairs, repairId];
    setSelectedRepairs(newSelected);
  };

  const totalPrice = repairs
    .filter((repair) => selectedRepairs.includes(repair.id))
    .reduce((sum, repair) => sum + repair.price, 0);

  return (
    <div>
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-2">Select repair services needed</h2>
      <p className="text-gray-600 mb-6">
        Choose one or more services for your device
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {repairs.map((repair) => {
          const isSelected = selectedRepairs.includes(repair.id);
          return (
            <Card
              key={repair.id}
              className={`
                p-4 cursor-pointer transition-all duration-300 hover:shadow-lg
                ${isSelected ? "ring-2 ring-blue-600 bg-blue-50" : ""}
              `}
              onClick={() => toggleRepair(repair.id)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                  p-2 rounded-lg
                  ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
                >
                  <repair.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{repair.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {repair.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-blue-600">
                      ${repair.price}
                    </span>
                    <span className="text-gray-500">{repair.duration}</span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <p className="text-sm text-gray-600">Total Price</p>
          <p className="text-2xl font-bold text-blue-600">${totalPrice}</p>
        </div>
        <Button
          className="px-8"
          disabled={selectedRepairs.length === 0}
          onClick={() => onSelect(selectedRepairs)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
