"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, User, Mail, Phone, MessageSquare } from "lucide-react";

type ContactInfoType = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

export function ContactInfo({
  contactInfo,
  onSubmit,
  onBack,
}: {
  contactInfo: ContactInfoType;
  onSubmit: (info: ContactInfoType) => void;
  onBack: () => void;
}) {
  const [info, setInfo] = useState<ContactInfoType>(contactInfo);
  const [errors, setErrors] = useState<Partial<ContactInfoType>>({});

  const validate = () => {
    const newErrors: Partial<ContactInfoType> = {};

    if (!info.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!info.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(info.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!info.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(info.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(info);
    }
  };

  return (
    <div className="space-y-6">
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>

      <div className="space-y-6">
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <User className="w-5 h-5" />
          </div>
          <Input
            className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
            placeholder="Your Name"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Mail className="w-5 h-5" />
          </div>
          <Input
            className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
            type="email"
            placeholder="Email Address"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Phone className="w-5 h-5" />
          </div>
          <Input
            className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
            type="tel"
            placeholder="Phone Number"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <MessageSquare className="w-5 h-5" />
          </div>
          <Textarea
            className="pl-10 min-h-[100px]"
            placeholder="Additional Notes (Optional)"
            value={info.notes}
            onChange={(e) => setInfo({ ...info, notes: e.target.value })}
          />
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mt-6">
        <h3 className="font-semibold mb-2">
          Why we need your contact information:
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>• To send booking confirmation and updates</li>
          <li>• To contact you about your repair</li>
          <li>• To provide warranty information</li>
          <li>• For emergency contact if needed</li>
        </ul>
      </div>

      <div className="flex justify-end mt-6">
        <Button className="px-8" onClick={handleSubmit}>
          Continue
        </Button>
      </div>
    </div>
  );
}
