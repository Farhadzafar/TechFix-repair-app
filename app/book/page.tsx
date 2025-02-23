"use client";
import React, { useState } from "react";
import {
  Smartphone,
  Laptop,
  Tablet,
  Wrench,
  ArrowLeft,
  Menu,
  X,
} from "lucide-react";

import {
  Device,
  Brand,
  Model,
  RepairService,
  RepairFormData,
} from "../../public/types";
import { brand, devices, models, repairServices } from "@/public/data/data";
import { StepIndicator } from "@/components/bookDevice/stepIndicator";

const steps = [
  { title: "Device Type", description: "Select your device type" },
  { title: "Brand", description: "Choose the brand" },
  { title: "Model", description: "Select your model" },
  { title: "Repair Service", description: "Choose repair services" },
  { title: "Contact Info", description: "Your contact details" },
  { title: "Review", description: "Review your order" },
];

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Laptop,
  Tablet,
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [formData, setFormData] = useState<RepairFormData>({
    device: null,
    brand: null,
    model: null,
    services: [],
    customerName: "",
    customerEmail: "",
  });

  const handleDeviceSelect = (device: Device) => {
    setFormData({ ...formData, device });
    setCurrentStep(1);
  };

  const handleBrandSelect = (brand: Brand) => {
    setFormData({ ...formData, brand });
    setCurrentStep(2);
  };

  const handleModelSelect = (model: Model) => {
    setFormData({ ...formData, model });
    setCurrentStep(3);
  };

  const handleServiceToggle = (service: RepairService) => {
    const services = formData.services.includes(service)
      ? formData.services.filter((s) => s.id !== service.id)
      : [...formData.services, service];
    setFormData({ ...formData, services });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(5);
  };

  const handleSubmit = () => {
    console.log("Submitting repair request:", formData);
    alert("Thank you for your repair request! We will contact you shortly.");
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Choose Your Device
              </h2>
              <p className="mt-2 text-gray-600">
                Select the type of device you need repaired
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {devices.map((device) => {
                const Icon = iconMap[device.icon];
                return (
                  <button
                    key={device.id}
                    onClick={() => handleDeviceSelect(device)}
                    className="group relative bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold text-center text-gray-900">
                        {device.name}
                      </h3>
                      <p className="mt-2 text-center text-gray-500 text-sm">
                        Tap to select
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Select Brand
              </h2>
              <p className="mt-2 text-gray-600">
                Choose your device manufacturer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {brand.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => handleBrandSelect(brand)}
                  className="group bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-900">
                    {brand.name}
                  </h3>
                  <p className="mt-2 text-center text-gray-500 text-sm">
                    Tap to select
                  </p>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Select Model
              </h2>
              <p className="mt-2 text-gray-600">
                Choose your specific device model
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {models
                .filter((model) => model.brandId === formData.brand?.id)
                .map((model) => (
                  <button
                    key={model.id}
                    onClick={() => handleModelSelect(model)}
                    className="group bg-white p-8 rounded-2xl shadow-sm border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="h-40 flex items-center justify-center mb-4">
                      <img
                        src={model.image}
                        alt={model.name}
                        className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-center text-gray-900">
                      {model.name}
                    </h3>
                    <p className="mt-2 text-center text-gray-500 text-sm">
                      Tap to select
                    </p>
                  </button>
                ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Select Repair Services
              </h2>
              <p className="mt-2 text-gray-600">Choose the services you need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repairServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceToggle(service)}
                  className={`
                    group cursor-pointer bg-white p-6 rounded-xl shadow-sm border-2
                    ${
                      formData.services.includes(service)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-100 hover:border-blue-500"
                    }
                    transition-all duration-300 transform hover:-translate-y-1
                  `}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`
                      p-4 rounded-xl
                      ${
                        formData.services.includes(service)
                          ? "bg-blue-500"
                          : "bg-gray-100 group-hover:bg-blue-500"
                      }
                      transition-colors duration-300
                    `}
                    >
                      <Wrench
                        className={`
                        w-6 h-6
                        ${
                          formData.services.includes(service)
                            ? "text-white"
                            : "text-gray-600 group-hover:text-white"
                        }
                      `}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {service.description}
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mt-3">
                        ${service.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {formData.services.length > 0 && (
              <div className="flex justify-end">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="mt-2 text-gray-600">Please provide your details</p>
            </div>
            <form
              onSubmit={handleContactSubmit}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                    value={formData.customerName}
                    onChange={(e) =>
                      setFormData({ ...formData, customerName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 block w-full rounded-xl border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 transition-colors"
                    value={formData.customerEmail}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customerEmail: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Review Order
                </button>
              </div>
            </form>
          </div>
        );

      case 5:
        return (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Order Summary
              </h2>
              <p className="mt-2 text-gray-600">Review your repair request</p>
            </div>
            <div className="bg-white shadow-sm rounded-2xl p-8 space-y-8">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Device Information
                </h3>
                <div className="flex items-center space-x-4">
                  {formData.device && (
                    <div className="bg-blue-100 p-3 rounded-xl">
                      {iconMap[formData.device?.icon] &&
                        React.createElement(iconMap[formData.device.icon], {
                          className: "w-6 h-6 text-blue-600",
                        })}
                    </div>
                  )}
                  <p className="text-gray-600 text-lg">
                    {formData.device?.name} - {formData.brand?.name}{" "}
                    {formData.model?.name}
                  </p>
                </div>
              </div>
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Selected Services
                </h3>
                <div className="space-y-4">
                  {formData.services.map((service) => (
                    <div
                      key={service.id}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-xl"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Wrench className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{service.name}</span>
                      </div>
                      <span className="font-medium text-blue-600">
                        ${service.price}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center text-xl">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="font-bold text-blue-600">
                        $
                        {formData.services
                          .reduce((sum, service) => sum + service.price, 0)
                          .toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="bg-gray-50 p-4 rounded-xl space-y-2">
                  <p className="text-gray-700">{formData.customerName}</p>
                  <p className="text-gray-600">{formData.customerEmail}</p>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
              >
                Confirm and Submit
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={currentStep > 0 ? goBack : undefined}
            className={`p-2 rounded-lg ${
              currentStep > 0
                ? "text-gray-600 hover:bg-gray-100"
                : "text-gray-300"
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <span className="font-medium text-gray-900">
            Step {currentStep + 1} of {steps.length}
          </span>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {showSidebar ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <div className="w-full relative flex flex-col md:flex-row min-h-screen h-full">
        {/* Sidebar */}
        <div
          className={`h-[110vh] overflow-y-auto
            md:w-80 md:absolute md:py-6
            ${
              showSidebar
                ? " absolute left-0 inset-0 z-40 bg-white"
                : "hidden md:block"
            }
          `}
        >
          <StepIndicator steps={steps} currentStep={currentStep} />
        </div>

        {/* Main Content */}
        <main
          className={`h-[110vh] overflow-y-auto flex-1 md:ml-80 ${
            currentStep === 5 ? "bg-gray-100" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            <div className="mt-16 md:mt-0">{renderStep()}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
