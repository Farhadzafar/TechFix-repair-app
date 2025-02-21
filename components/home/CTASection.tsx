import {
  Shield,
  Zap,
  Settings,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl text-blue-100">
            Get professional repair service with our lifetime warranty
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 glass-card">
            <CTAFeatures />
            <CTAButtons />
          </Card>
        </div>
      </div>
    </section>
  );
}

function CTAFeatures() {
  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "All repairs guaranteed",
    },
    {
      icon: Zap,
      title: "Same Day Service",
      description: "Quick turnaround time",
    },
    {
      icon: Settings,
      title: "Expert Technicians",
      description: "Certified professionals",
    },
    {
      icon: CheckCircle2,
      title: "Quality Parts",
      description: "Genuine components",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {features.map((feature, index) => (
        <CTAFeatureItem key={index} {...feature} />
      ))}
    </div>
  );
}

function CTAFeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function CTAButtons() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <Button className="flex-1 h-12 text-lg bg-gradient-to-r from-blue-600 to-blue-500">
          Book a Repair
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
        <Button variant="outline" className="flex-1 h-12 text-lg">
          Contact Support
        </Button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Or call us directly:
          <a
            href="tel:+1555123456"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            +1 (555) 123-4567
          </a>
        </p>
      </div>
    </>
  );
}
