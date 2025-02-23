"use client";
import React, { useState } from "react";
import {
  Wrench,
  User,
  ShoppingCart,
  Menu,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Wifi,
  Battery,
  Camera,
  Speaker,
  X,
  Monitor,
  Headphones,
  Gamepad,
  Printer,
  Tv,
} from "lucide-react";
import Link from "next/link";
import { SearchButton } from "./SearchButton";
const repairServices = [
  {
    category: "Mobile Devices",
    items: [
      {
        icon: <Smartphone className="w-5 h-5" />,
        name: "Phones",
        description: "Screen repairs, battery replacement, and more",
      },
      {
        icon: <Tablet className="w-5 h-5" />,
        name: "Tablets",
        description: "iPad and Android tablet repairs",
      },
      {
        icon: <Watch className="w-5 h-5" />,
        name: "Smartwatches",
        description: "Screen and battery services for all brands",
      },
    ],
  },
  {
    category: "Computers",
    items: [
      {
        icon: <Laptop className="w-5 h-5" />,
        name: "Laptops",
        description: "Hardware upgrades and repairs",
      },
      {
        icon: <Monitor className="w-5 h-5" />,
        name: "Desktops",
        description: "Custom builds and component repairs",
      },
      {
        icon: <Printer className="w-5 h-5" />,
        name: "Printers",
        description: "Maintenance and troubleshooting",
      },
    ],
  },
  {
    category: "Entertainment",
    items: [
      {
        icon: <Gamepad className="w-5 h-5" />,
        name: "Gaming Consoles",
        description: "PlayStation, Xbox, and Nintendo repairs",
      },
      {
        icon: <Tv className="w-5 h-5" />,
        name: "TVs",
        description: "Smart TV and display repairs",
      },
      {
        icon: <Speaker className="w-5 h-5" />,
        name: "Audio Devices",
        description: "Speaker and sound system repairs",
      },
    ],
  },
  {
    category: "Accessories",
    items: [
      {
        icon: <Headphones className="w-5 h-5" />,
        name: "Headphones",
        description: "Wire repairs and component replacement",
      },
      {
        icon: <Camera className="w-5 h-5" />,
        name: "Cameras",
        description: "Digital camera and lens repairs",
      },
      {
        icon: <Wifi className="w-5 h-5" />,
        name: "Network Devices",
        description: "Router and modem troubleshooting",
      },
    ],
  },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 gap-8">
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <Link href="/" className="flex items-center space-x-2">
                <Wrench className="w-10 h-10 text-blue-600" />
                <span className="text-2xl font-bold text-gray-800">
                  TechFix
                </span>
              </Link>

              {/* Navigation Items */}
              <div className="hidden md:flex items-center space-x-8 ml-12">
                {/* Repair Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className="flex items-center text-gray-600 hover:text-blue-600 space-x-1"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    <span>Repair Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`
                absolute -left-20  w-[900px] bg-white rounded-lg shadow-lg border border-gray-100 z-50
                transition-all duration-300 transform
                ${
                  isServicesOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }
              `}
                  >
                    <div className="grid md:grid-cols-4 gap-6 p-6">
                      {repairServices.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-900 mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-4">
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href={`#${item.name.toLowerCase()}`}
                                className="flex items-start space-x-3 group/item"
                              >
                                <div className="p-2 rounded-lg bg-gray-50 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                    {item.name}
                                  </div>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/service"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Services
                </Link>
                <Link
                  href="/brands"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Brands
                </Link>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About us
                </Link>
                <Link
                  href="/brands"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <SearchButton />
              <a
                href="#account"
                className="hidden md:flex items-center text-gray-600 hover:text-blue-600"
              >
                <User className="w-5 h-5 mr-1" />
                <span>Account</span>
              </a>
              <a
                href="#cart"
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
              </a>
              <Link
                href="/book"
                className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Repair
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "block" : "hidden"
            } py-4 border-t`}
          >
            <div className="flex flex-col space-y-4">
              <button
                className="flex items-center justify-between text-gray-600 hover:text-blue-600 w-full"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Repair Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-4">
                  {repairServices.map((category) => (
                    <div key={category.category} className="mb-4">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.items.map((item) => (
                          <a
                            key={item.name}
                            href={`#${item.name.toLowerCase()}`}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
                          >
                            <div className="p-1">{item.icon}</div>
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <a href="#guides" className="text-gray-600 hover:text-blue-600">
                Repair Guides
              </a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Book Repair
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
