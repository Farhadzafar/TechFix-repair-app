// booking device data ->
import { Device, Brand as Brands, Model, RepairService } from "../types";
import {
  Smartphone,
  Laptop,
  Tablet,
  Camera,
  Airplay as Display,
  Battery,
  Wifi,
  Speaker,
} from "lucide-react";

export const devices: Device[] = [
  { id: "smartphone", name: "Smartphone", icon: "Smartphone" },
  { id: "laptop", name: "Laptop", icon: "Laptop" },
  { id: "tablet", name: "Tablet", icon: "Tablet" },
];

export const brand: Brands[] = [
  {
    id: "apple",
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&q=80",
  },
  {
    id: "samsung",
    name: "Samsung",
    logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&q=80",
  },
  {
    id: "google",
    name: "Google",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&q=80",
  },
];

export const models: Model[] = [
  {
    id: "iphone-14",
    brandId: "apple",
    name: "iPhone 14",
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=200&q=80",
  },
  {
    id: "iphone-13",
    brandId: "apple",
    name: "iPhone 13",
    image:
      "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=200&q=80",
  },
  {
    id: "s23",
    brandId: "samsung",
    name: "Galaxy S23",
    image:
      "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=200&q=80",
  },
];

export const repairServices: RepairService[] = [
  {
    id: "screen",
    name: "Screen Replacement",
    price: 149.99,
    description: "Replace damaged or cracked screen",
  },
  {
    id: "battery",
    name: "Battery Replacement",
    price: 79.99,
    description: "Replace old or failing battery",
  },
  {
    id: "camera",
    name: "Camera Repair",
    price: 99.99,
    description: "Fix camera issues or replace camera module",
  },
  {
    id: "speaker",
    name: "Speaker Repair",
    price: 69.99,
    description: "Fix audio issues or replace speaker",
  },
];

// //////////////////////////////////////////////

interface Brand {
  name: string;
  logo: string;
  devices: string;
  bgColor: string;
  categories: {
    name: string;
    devices: {
      name: string;
      image: string;
      price: string;
      repairTime: string;
    }[];
  }[];
}

export const brands: Brand[] = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    devices: "iPhone, iPad, MacBook",
    bgColor: "bg-gray-100",
    categories: [
      {
        name: "Smartphones",
        devices: [
          {
            name: "iPhone 15 Pro",
            image:
              "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=2070",
            price: "From $69",
            repairTime: "1-2 hours",
          },
          {
            name: "iPhone 14",
            image:
              "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=2070",
            price: "From $59",
            repairTime: "1-2 hours",
          },
        ],
      },
      {
        name: "Tablets",
        devices: [
          {
            name: "iPad Pro",
            image:
              "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=2070",
            price: "From $89",
            repairTime: "2-3 hours",
          },
        ],
      },
      {
        name: "Laptops",
        devices: [
          {
            name: "MacBook Pro",
            image:
              "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=2070",
            price: "From $129",
            repairTime: "24 hours",
          },
        ],
      },
    ],
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    devices: "Galaxy, Tab, Laptop",
    bgColor: "bg-blue-50",
    categories: [
      {
        name: "Smartphones",
        devices: [
          {
            name: "Galaxy S24 Ultra",
            image:
              "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=2070",
            price: "From $79",
            repairTime: "1-2 hours",
          },
        ],
      },
      {
        name: "Tablets",
        devices: [
          {
            name: "Galaxy Tab S9",
            image:
              "https://images.unsplash.com/photo-1632634571086-44a8be676ad3?auto=format&fit=crop&q=80&w=2070",
            price: "From $89",
            repairTime: "2-3 hours",
          },
        ],
      },
    ],
  },

  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    devices: "Pixel, Nest",
    bgColor: "bg-gray-200",
    categories: [
      {
        name: "Smartphones",
        devices: [
          {
            name: "Pixel 8",
            image:
              "https://images.unsplash.com/photo-1616707426301-c725dc8a2444?auto=format&fit=crop&q=80&w=2070",
            price: "From $69",
            repairTime: "1-2 hours",
          },
          {
            name: "Pixel 7",
            image:
              "https://images.unsplash.com/photo-1599955057076-2cd2b2e7a9ab?auto=format&fit=crop&q=80&w=2070",
            price: "From $59",
            repairTime: "1-2 hours",
          },
        ],
      },
      {
        name: "Smart Home",
        devices: [
          {
            name: "Nest Hub Max",
            image:
              "https://images.unsplash.com/photo-1616615111541-cda49f8455d8?auto=format&fit=crop&q=80&w=2070",
            price: "From $129",
            repairTime: "1-2 hours",
          },
          {
            name: "Nest Thermostat",
            image:
              "https://images.unsplash.com/photo-1589908284546-4621d18fd65b?auto=format&fit=crop&q=80&w=2070",
            price: "From $99",
            repairTime: "1-2 hours",
          },
        ],
      },
    ],
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Sony_logo.svg",
    devices: "Xperia, PlayStation",
    bgColor: "bg-gray-300",
    categories: [
      {
        name: "Smartphones",
        devices: [
          {
            name: "Xperia 1 III",
            image:
              "https://images.unsplash.com/photo-1613122302172-c6eb8c50a389?auto=format&fit=crop&q=80&w=2070",
            price: "From $79",
            repairTime: "1-2 hours",
          },
          {
            name: "Xperia 5 II",
            image:
              "https://images.unsplash.com/photo-1622631487688-d624d051f3d4?auto=format&fit=crop&q=80&w=2070",
            price: "From $69",
            repairTime: "1-2 hours",
          },
        ],
      },
      {
        name: "Gaming",
        devices: [
          {
            name: "PlayStation 5",
            image:
              "https://images.unsplash.com/photo-1619852472600-3f6b02b40376?auto=format&fit=crop&q=80&w=2070",
            price: "From $499",
            repairTime: "24-48 hours",
          },
          {
            name: "PlayStation 4",
            image:
              "https://images.unsplash.com/photo-1593020227822-9b2b7b1f38e0?auto=format&fit=crop&q=80&w=2070",
            price: "From $299",
            repairTime: "24-48 hours",
          },
        ],
      },
    ],
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    devices: "Surface, Xbox",
    bgColor: "bg-gray-400",
    categories: [
      {
        name: "Laptops",
        devices: [
          {
            name: "Surface Pro 8",
            image:
              "https://images.unsplash.com/photo-1588342286712-8cf546ba3536?auto=format&fit=crop&q=80&w=2070",
            price: "From $1099",
            repairTime: "24 hours",
          },
          {
            name: "Surface Laptop 4",
            image:
              "https://images.unsplash.com/photo-1608372275777-e81ca79dca9b?auto=format&fit=crop&q=80&w=2070",
            price: "From $999",
            repairTime: "24 hours",
          },
        ],
      },
      {
        name: "Gaming",
        devices: [
          {
            name: "Xbox Series X",
            image:
              "https://images.unsplash.com/photo-1605248542779-3af5239283c9?auto=format&fit=crop&q=80&w=2070",
            price: "From $499",
            repairTime: "24-48 hours",
          },
          {
            name: "Xbox Series S",
            image:
              "https://images.unsplash.com/photo-1611324469760-9d0c839b6129?auto=format&fit=crop&q=80&w=2070",
            price: "From $299",
            repairTime: "24-48 hours",
          },
        ],
      },
    ],
  },
  {
    name: "Huawei",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Huawei_logo.svg",
    devices: "Mate, P series",
    bgColor: "bg-gray-500",
    categories: [
      {
        name: "Smartphones",
        devices: [
          {
            name: "Mate 40 Pro",
            image:
              "https://images.unsplash.com/photo-1604908553934-68812d315dbb?auto=format&fit=crop&q=80&w=2070",
            price: "From $1099",
            repairTime: "1-2 hours",
          },
          {
            name: "P40 Pro",
            image:
              "https://images.unsplash.com/photo-1589173968901-8d24b2db1f5f?auto=format&fit=crop&q=80&w=2070",
            price: "From $899",
            repairTime: "1-2 hours",
          },
        ],
      },
      {
        name: "Tablets",
        devices: [
          {
            name: "MatePad Pro",
            image:
              "https://images.unsplash.com/photo-1605493150869-43b14dc149a3?auto=format&fit=crop&q=80&w=2070",
            price: "From $599",
            repairTime: "2-3 hours",
          },
        ],
      },
    ],
  },
];
