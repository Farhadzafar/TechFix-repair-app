"use client";

import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Check,
  Calendar,
  Clock,
  PenTool as Tool,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";
import type { BookingData } from "@/app/book/page";

export function BookingSummary({
  bookingData,
  onBack,
  onConfirm,
}: {
  bookingData: BookingData;
  onBack: () => void;
  onConfirm: () => void;
}) {
  return (
    <div>
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6">Review Your Booking</h2>

      <div className="space-y-6">
        <SummarySection
          title="Device Information"
          icon={Tool}
          items={[
            { label: "Device Type", value: bookingData.deviceType },
            { label: "Brand", value: bookingData.brand },
            { label: "Model", value: bookingData.model },
          ]}
        />

        <SummarySection
          title="Repair Services"
          icon={Tool}
          items={[
            {
              label: "Selected Repairs",
              value: bookingData.repairs.join(", "),
            },
          ]}
        />

        <SummarySection
          title="Appointment"
          icon={Calendar}
          items={[
            {
              label: "Date",
              value: bookingData.date
                ? format(bookingData.date, "MMMM d, yyyy")
                : "",
            },
            { label: "Time", value: bookingData.time },
          ]}
        />

        <SummarySection
          title="Contact Information"
          icon={User}
          items={[
            { label: "Name", value: bookingData.contactInfo.name },
            { label: "Email", value: bookingData.contactInfo.email },
            { label: "Phone", value: bookingData.contactInfo.phone },
            {
              label: "Notes",
              value: bookingData.contactInfo.notes || "No additional notes",
            },
          ]}
        />
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="font-semibold mb-4">What&apos;s Next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NextStepCard
            icon={Mail}
            title="Confirmation Email"
            description="You'll receive a detailed confirmation email with your booking information"
          />
          <NextStepCard
            icon={Calendar}
            title="Appointment Reminder"
            description="We'll send you a reminder 24 hours before your appointment"
          />
          <NextStepCard
            icon={Tool}
            title="Repair Preparation"
            description="Our technician will be ready at your scheduled time"
          />
          <NextStepCard
            icon={Check}
            title="Service Guarantee"
            description="All repairs come with our lifetime warranty"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <p className="text-gray-600 max-w-md text-sm">
          By confirming, you agree to our terms of service and cancellation
          policy. You can cancel or reschedule up to 24 hours before your
          appointment.
        </p>
        <Button size="lg" className="px-8" onClick={onConfirm}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
}

function SummarySection({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: { label: string; value: string }[];
}) {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function NextStepCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
