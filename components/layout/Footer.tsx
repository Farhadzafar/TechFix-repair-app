"use client";

import { MapPin, Phone, Mail } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NewsletterSection />
        <MainFooterContent />
        <BottomBar />
      </div>
    </footer>
  );
}

function NewsletterSection() {
  return (
    <div className="py-12 border-b border-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-400 mb-6">Subscribe to our newsletter for repair tips and exclusive offers</p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <Button className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}

function MainFooterContent() {
  return (
    <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <CompanyInfo />
      <QuickLinks />
      <ContactInfo />
      <BusinessHours />
    </div>
  );
}

function CompanyInfo() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 gradient-text">TechFix</h3>
      <p className="text-gray-400 mb-4">Expert device repair services you can trust. Professional repairs with lifetime warranty.</p>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {['facebook', 'twitter', 'instagram'].map((platform) => (
        <a key={platform} href="#" className="text-gray-400 hover:text-white transition-colors">
          <span className="sr-only">{platform}</span>
          <SocialIcon platform={platform} />
        </a>
      ))}
    </div>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  const icons = {
    facebook: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    instagram: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  };
  return icons[platform as keyof typeof icons];
}

function QuickLinks() {
  const links = [
    "Services",
    "Brands",
    "About Us",
    "Contact",
    "Book Repair",
    "Track Order"
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
          <span className="text-gray-400">
            123 Repair Street<br />
            Tech City, TC 12345
          </span>
        </li>
        <li className="flex items-center">
          <Phone className="h-5 w 5 text-gray-400 mr-2" />
          <a href="tel:+1555123456" className="text-gray-400 hover:text-white transition-colors">
            +1 (555) 123-4567
          </a>
        </li>
        <li className="flex items-center">
          <Mail className="h-5 w-5 text-gray-400 mr-2" />
          <a href="mailto:support@techfix.com" className="text-gray-400 hover:text-white transition-colors">
            support@techfix.com
          </a>
        </li>
      </ul>
    </div>
  );
}

function BusinessHours() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
      <ul className="space-y-2">
        <li className="flex justify-between text-gray-400">
          <span>Monday - Friday</span>
          <span>9:00 AM - 8:00 PM</span>
        </li>
        <li className="flex justify-between text-gray-400">
          <span>Saturday</span>
          <span>10:00 AM - 6:00 PM</span>
        </li>
        <li className="flex justify-between text-gray-400">
          <span>Sunday</span>
          <span>Closed</span>
        </li>
      </ul>
      <div className="mt-6 p-4 bg-gray-800 rounded-lg">
        <p className="text-sm text-gray-400">
          <strong className="text-white">Emergency Repairs:</strong><br />
          Available 24/7 by appointment
        </p>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div className="py-6 border-t border-gray-800 text-center text-gray-400">
      <p>© 2025 TechFix. All rights reserved.</p>
    </div>
  );
}