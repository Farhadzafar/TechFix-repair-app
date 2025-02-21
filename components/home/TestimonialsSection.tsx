"use client";

import { Star } from 'lucide-react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    device: "iPhone 13 Pro",
    rating: 5,
    comment: "Fantastic service! Fixed my cracked screen in under 2 hours. Highly recommend!",
    date: "2 days ago"
  },
  {
    name: "Michael Chen",
    device: "MacBook Pro",
    rating: 5,
    comment: "Professional and knowledgeable staff. They saved all my data and fixed the battery issue.",
    date: "1 week ago"
  },
  {
    name: "Emily Wilson",
    device: "Samsung Galaxy S21",
    rating: 5,
    comment: "Great experience! Fair pricing and excellent customer service. Will definitely return.",
    date: "3 days ago"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, device, rating, comment, date }: {
  name: string;
  device: string;
  rating: number;
  comment: string;
  date: string;
}) {
  return (
    <Card className="testimonial-card">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4">"{comment}"</p>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{device}</p>
        </div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </Card>
  );
}