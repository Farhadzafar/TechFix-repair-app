import { ArrowRight, BookOpen, Leaf, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Manuals() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Repair Manuals for Everything,
              <span className="text-blue-600"> by Everyone</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We help thousands of people repair their belongings every day.
              Every time you fix something, you&apos;re helping the planet.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Step-by-Step Guides
                  </h3>
                  <p className="text-gray-600">
                    Clear, detailed instructions with high-quality photos for
                    every repair.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Community-Driven
                  </h3>
                  <p className="text-gray-600">
                    Join thousands of repair enthusiasts sharing their knowledge
                    and experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Leaf className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Eco-Friendly Impact
                  </h3>
                  <p className="text-gray-600">
                    Every repair helps reduce e-waste and protects our
                    environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#guides"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Browse All Repair Guides
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="relative">
            {/* <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
              alt="Repair guide demonstration"
              className="rounded-lg shadow-xl"
            /> */}
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
              alt="Repair guide demonstration"
              className="rounded-lg shadow-xl"
              layout="responsive"
              width={2070}
              height={1380}
              quality={60}
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Repair Guides</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
