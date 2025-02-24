"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export function TimeSelection({
  onSelect,
  onBack,
}: {
  onSelect: (date: Date, time: string) => void;
  onBack: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  return (
    <div>
      <Button variant="ghost" className="mb-6" onClick={onBack}>
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h2 className="text-2xl font-bold mb-6">Choose your preferred time</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            disabled={{ before: new Date() }}
          />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Select Time</h3>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <Card
                key={time}
                className={`
                  p-4 cursor-pointer text-center transition-all duration-300
                  ${
                    selectedTime === time
                      ? "ring-2 ring-blue-600 bg-blue-50"
                      : "hover:bg-gray-50"
                  }
                `}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <div>
          {selectedDate && selectedTime && (
            <p className="text-gray-600">
              Selected: {format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
            </p>
          )}
        </div>
        <Button
          className="px-8"
          disabled={!selectedDate || !selectedTime}
          onClick={() => selectedDate && onSelect(selectedDate, selectedTime)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
