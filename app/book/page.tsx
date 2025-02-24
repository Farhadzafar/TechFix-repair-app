"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookingSteps } from "@/components/booking/BookingSteps";
import { DeviceSelection } from "@/components/booking/DeviceSelection";
import { BrandSelection } from "@/components/booking/BrandSelection";
import { ModelSelection } from "@/components/booking/ModelSelection";
import { RepairSelection } from "@/components/booking/RepairSelection";
import { TimeSelection } from "@/components/booking/TimeSelection";
import { ContactInfo } from "@/components/booking/ContactInfo";
import { BookingSummary } from "@/components/booking/BookingSummary";

export type BookingData = {
  deviceType: string;
  brand: string;
  model: string;
  repairs: string[];
  date: Date | null;
  time: string;
  contactInfo: {
    name: string;
    email: string;
    phone: string;
    notes: string;
  };
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    deviceType: "",
    brand: "",
    model: "",
    repairs: [],
    date: null,
    time: "",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 7));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 ">
      <div className="max-w-7xl mx-auto px-0">
        <Card className="p-8 shadow-xl border-t-4">
          <BookingSteps currentStep={step} />

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            {step === 1 && (
              <DeviceSelection
                selected={bookingData.deviceType}
                onSelect={(device) => {
                  updateBookingData({ deviceType: device });
                  nextStep();
                }}
              />
            )}

            {step === 2 && (
              <BrandSelection
                deviceType={bookingData.deviceType}
                selected={bookingData.brand}
                onSelect={(brand) => {
                  updateBookingData({ brand });
                  nextStep();
                }}
                onBack={prevStep}
              />
            )}

            {step === 3 && (
              <ModelSelection
                brand={bookingData.brand}
                selected={bookingData.model}
                onSelect={(model) => {
                  updateBookingData({ model });
                  nextStep();
                }}
                onBack={prevStep}
              />
            )}

            {step === 4 && (
              <RepairSelection
                model={bookingData.model}
                selected={bookingData.repairs}
                onSelect={(repairs) => {
                  updateBookingData({ repairs });
                  nextStep();
                }}
                onBack={prevStep}
              />
            )}

            {step === 5 && (
              <TimeSelection
                onSelect={(date, time) => {
                  updateBookingData({ date, time });
                  nextStep();
                }}
                onBack={prevStep}
              />
            )}

            {step === 6 && (
              <ContactInfo
                contactInfo={bookingData.contactInfo}
                onSubmit={(contactInfo) => {
                  updateBookingData({ contactInfo });
                  nextStep();
                }}
                onBack={prevStep}
              />
            )}

            {step === 7 && (
              <BookingSummary
                bookingData={bookingData}
                onBack={prevStep}
                onConfirm={() => {
                  // Handle booking confirmation
                  console.log("Booking confirmed:", bookingData);
                }}
              />
            )}
          </motion.div>
        </Card>
      </div>
    </div>
  );
}
