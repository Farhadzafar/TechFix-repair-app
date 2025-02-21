"use client";

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>123 Repair Street, Tech City</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>Mon-Sat: 9AM-8PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+1555123456" className="flex items-center hover:text-blue-200">
              <Phone className="h-4 w-4 mr-1" />
              <span>+1 (555) 123-4567</span>
            </a>
            <a href="mailto:support@techfix.com" className="flex items-center hover:text-blue-200">
              <Mail className="h-4 w-4 mr-1" />
              <span>support@techfix.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}