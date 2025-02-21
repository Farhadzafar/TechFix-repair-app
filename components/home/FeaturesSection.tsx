import { Shield, Clock, PenTool as Tool, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Guaranteed Repairs",
    description: "90-day warranty on all repairs with satisfaction guarantee",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed same-day, often within hours",
  },
  {
    icon: Tool,
    title: "Expert Technicians",
    description: "Certified professionals with years of experience",
  },
  {
    icon: Award,
    title: "Quality Parts",
    description: "Only genuine or high-quality compatible parts used",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the best in device repair services
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 text-center service-card">
      <div className="h-12 w-12 mx-auto mb-4 text-blue-600">
        <Icon className="h-full w-full" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}
