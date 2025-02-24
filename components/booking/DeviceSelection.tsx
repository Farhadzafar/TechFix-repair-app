"use client";

import {
  Smartphone,
  Laptop,
  Watch,
  Tablet,
  Headphones,
  Gamepad,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const devices = [
  { id: "smartphone", name: "Smartphone", icon: Smartphone },
  { id: "laptop", name: "Laptop", icon: Laptop },
  { id: "tablet", name: "Tablet", icon: Tablet },
  { id: "smartwatch", name: "Smartwatch", icon: Watch },
  { id: "headphones", name: "Headphones", icon: Headphones },
  { id: "gaming", name: "Gaming Console", icon: Gamepad },
];

export function DeviceSelection({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (device: string) => void;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        What type of device do you need to repair?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {devices.map((device) => {
          const isSelected = selected === device.id;
          return (
            <Card
              key={device.id}
              className={`
                p-6 cursor-pointer transition-all duration-300 hover:shadow-lg
                ${isSelected ? "ring-2 ring-blue-600 bg-blue-50" : ""}
              `}
              onClick={() => onSelect(device.id)}
            >
              <div className="flex flex-col items-center text-center">
                <device.icon
                  className={`
                  w-12 h-12 mb-4
                  ${isSelected ? "text-blue-600" : "text-gray-600"}
                `}
                />
                <h3 className="font-semibold">{device.name}</h3>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
