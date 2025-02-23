import React from "react";
import {
  Smartphone,
  Building2,
  Layers,
  Wrench,
  UserCircle2,
  ClipboardCheck,
  Check,
} from "lucide-react";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  currentStep: number;
};

const stepIcons = [
  Smartphone,
  Building2,
  Layers,
  Wrench,
  UserCircle2,
  ClipboardCheck,
];

const stepColors = [
  "from-indigo-500 to-blue-500",
  "from-blue-500 to-cyan-500",
  "from-cyan-500 to-teal-500",
  "from-teal-500 to-green-500",
  "from-green-500 to-emerald-500",
  "from-emerald-500 to-indigo-500",
];

export function StepIndicator({ steps, currentStep }: Props) {
  return (
    <div className="h-full bg-gradient-to-b from-slate-50 to-white border-r border-slate-200">
      <nav aria-label="Progress" className="p-6">
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Repair Process
          </h2>
          <div className="md:hidden">
            <span className="text-sm font-medium text-slate-600">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
        </div>
        <ol role="list" className="relative space-y-4">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;
            const colorClass = stepColors[index];

            return (
              <li key={step.title}>
                <div
                  className={`
                    group relative flex items-start p-3 rounded-xl transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-slate-50 to-white shadow-sm"
                        : index <= currentStep
                        ? "hover:bg-slate-50"
                        : ""
                    }
                  `}
                >
                  {index !== steps.length - 1 && (
                    <div
                      className={`
                        absolute left-6 top-14 w-0.5 h-full -ml-px
                        ${
                          isCompleted
                            ? "bg-gradient-to-b " + colorClass
                            : "bg-slate-200"
                        }
                        transition-colors duration-300
                      `}
                    />
                  )}
                  <div
                    className={`
                      relative flex h-12 w-12 items-center justify-center rounded-xl
                      ${
                        isActive
                          ? "bg-gradient-to-r " +
                            colorClass +
                            " ring-2 ring-offset-2 ring-" +
                            colorClass.split("-")[1]
                          : isCompleted
                          ? "bg-gradient-to-r " + colorClass
                          : "bg-slate-200"
                      }
                      transition-all duration-300 shadow-md
                    `}
                  >
                    {isCompleted ? (
                      <Check className="h-6 w-6 text-white" />
                    ) : (
                      <Icon
                        className={`h-6 w-6 ${
                          isActive ? "text-white" : "text-slate-500"
                        }`}
                      />
                    )}
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <div
                      className={`
                        text-sm font-semibold
                        ${
                          isActive
                            ? "text-" + colorClass.split("-")[1]
                            : isCompleted
                            ? "text-slate-900"
                            : "text-slate-500"
                        }
                      `}
                    >
                      {step.title}
                    </div>
                    <div
                      className={`
                        text-sm mt-0.5
                        ${
                          isActive
                            ? "text-" + colorClass.split("-")[1] + "/80"
                            : "text-slate-500"
                        }
                      `}
                    >
                      {step.description}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
