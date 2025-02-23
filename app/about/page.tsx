import React from "react";
import {
  Award,
  Clock,
  Users,
  Globe,
  Wrench,
  Shield,
  ThumbsUp,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    description: "Serving customers since 2009",
  },
  {
    number: "50K+",
    label: "Repairs Completed",
    icon: <Wrench className="w-6 h-6 text-green-600" />,
    description: "Successfully fixed devices",
  },
  {
    number: "99%",
    label: "Customer Satisfaction",
    icon: <ThumbsUp className="w-6 h-6 text-yellow-600" />,
    description: "Based on customer reviews",
  },
  {
    number: "20+",
    label: "Service Locations",
    icon: <MapPin className="w-6 h-6 text-red-600" />,
    description: "Across major cities",
  },
];

const values = [
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Quality Assurance",
    description:
      "Every repair undergoes rigorous testing to ensure the highest quality standards.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: "Expert Team",
    description:
      "Our certified technicians have years of experience in device repair.",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-600" />,
    title: "Warranty Guaranteed",
    description:
      "All repairs come with our lifetime warranty for your peace of mind.",
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-600" />,
    title: "Eco-Friendly",
    description:
      "We're committed to sustainable practices and reducing e-waste.",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974",
    bio: "20+ years in tech repair industry",
  },
  {
    name: "Michael Chen",
    role: "Head of Repairs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1974",
    bio: "Apple & Samsung certified expert",
  },
  {
    name: "Emily Rodriguez",
    role: "Customer Experience",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961",
    bio: "Dedicated to exceptional service",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2070")',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted Device Repair Experts Since 2009
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We&apos;re passionate about fixing devices and providing
              exceptional customer service. Our team of certified technicians is
              here to help you with all your repair needs.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center">
              Meet Our Team
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, TechFix began with a simple mission: to
                  provide reliable, high-quality device repairs at fair prices.
                  What started as a small repair shop has grown into a trusted
                  name in tech repair across the country.
                </p>
                <p>
                  Our founder, Sarah Johnson, noticed a gap in the market for
                  transparent, customer-focused repair services. She assembled a
                  team of certified technicians who shared her vision for
                  excellence and commitment to customer satisfaction.
                </p>
                <p>
                  Today, we&apos;re proud to have helped over 50,000 customers
                  get their devices back to perfect working condition. Our
                  commitment to quality, transparency, and customer service
                  remains as strong as ever.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070"
                alt="TechFix workshop"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl font-bold text-blue-600">2009</div>
                <div className="text-gray-600">Year Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and help us deliver
              the best possible service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to providing the best repair
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Visit Us</h4>
                      <p>123 Repair Street</p>
                      <p>Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                      <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p>support@techfix.com</p>
                      <p>sales@techfix.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      rows={4}
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
