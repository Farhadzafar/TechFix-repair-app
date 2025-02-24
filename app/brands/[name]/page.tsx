import { ChevronLeft, Clock, DollarSign } from "lucide-react";
import { brands } from "@/public/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";

// د static params تولید
export async function generateStaticParams() {
  return brands.map((brand) => ({
    name: brand.name.toLowerCase(),
  }));
}

interface BrandPageParams {
  params: {
    name: string;
  };
}

export default function BrandPage({ params }: BrandPageParams) {
  const { name } = params;
  const brand = brands.find((b) => b.name.toLowerCase() === name.toLowerCase());

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${brand.bgColor} border-b`}>
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to brands
          </Link>

          <div className="flex items-center space-x-6">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 object-contain"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {brand.name} Repair Services
              </h1>
              <p className="text-gray-600 mt-1">
                Professional repairs for all {brand.name} devices
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {brand.categories.map((category, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {category.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.devices.map((device, deviceIndex) => (
                <div
                  key={deviceIndex}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <Link href="/book">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={device.image}
                        alt={device.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {device.name}
                      </h3>

                      {/* <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                        <span>{device.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-5 h-5 mr-2 text-blue-600" />
                        <span>{device.repairTime}</span>
                      </div>
                    </div> */}

                      {/* <Link
                      href="/book"
                      className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Book Repair
                    </Link> */}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
