"use client";

import {
  Check,
  Smartphone,
  Laptop,
  PenTool as Tool,
  Clock,
  User,
  ClipboardCheck,
} from "lucide-react";

const steps = [
  { title: "Device", description: "Select your device type", icon: Smartphone },
  { title: "Brand", description: "Choose the brand", icon: Laptop },
  { title: "Model", description: "Select your model", icon: Laptop },
  { title: "Repair", description: "Choose repair services", icon: Tool },
  { title: "Schedule", description: "Pick a time", icon: Clock },
  { title: "Contact", description: "Your details", icon: User },
  { title: "Review", description: "Confirm booking", icon: ClipboardCheck },
];

export function BookingSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="relative">
      <div className="w-[95%] absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${((currentStep - 1) / (steps.length - 1)) * 107}%`,
          }}
        />
      </div>
      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index + 1 < currentStep;
          const isCurrent = index + 1 === currentStep;
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="flex flex-col items-start justify-center"
            >
              <div
                className={`
                w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-300 shadow-lg
                ${
                  isCompleted
                    ? "bg-gradient-to-r from-blue-600 to-blue-500"
                    : isCurrent
                    ? "bg-gradient-to-r from-blue-500 to-blue-400"
                    : "bg-white border-2 border-gray-200"
                }
              `}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <Icon
                    className={`w-6 h-6 ${
                      isCurrent ? "text-white" : "text-gray-400"
                    }`}
                  />
                )}
              </div>
              <p
                className={`
                mt-2 font-medium text-sm transition-colors duration-300
                ${
                  isCurrent
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-gray-900"
                    : "text-gray-500"
                }
              `}
              >
                {step.title}
              </p>
              <p className="text-xs text-gray-500 hidden md:block">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
