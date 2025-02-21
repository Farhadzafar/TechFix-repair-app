"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">TechFix</span>
            </div>
            <div className="hidden md:flex ml-10 space-x-8">
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Brands</NavLink>
              <NavLink href="#">About</NavLink>
              <NavLink href="#">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
              Book Now
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Track Repair
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  );
}