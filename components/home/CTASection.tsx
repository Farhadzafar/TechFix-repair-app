import {
  Shield,
  Zap,
  Settings,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blue-600">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 2px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Fix Your Device?
              </h2>
              <p className="text-xl text-gray-600">
                Get professional repair service with our lifetime warranty. Book
                now or contact us for a free consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Lifetime Warranty
                    </h3>
                    <p>All repairs backed by our guarantee</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Same-Day Service
                    </h3>
                    <p>Most repairs completed in hours</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MessageSquare className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Expert Support
                    </h3>
                    <p>Free consultation and advice</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
                  Book a Repair
                </button>
                <button className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold text-lg">
                  Contact Support
                </button>
                <div className="text-center mt-4">
                  <p className="text-gray-600">Or call us directly</p>
                  <a
                    href="tel:+15551234567"
                    className="text-xl font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-center mt-2"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
