import { HiCheckCircle } from "react-icons/hi";

// Defining the shape of our data for TypeScript
interface Service {
  id: number;
  name: string;
}

const services: Service[] = [
  { id: 1, name: "Real Estate" },
  { id: 2, name: "Landscaping" },
  { id: 3, name: "Custom Car Repair" },
  { id: 4, name: "Food Delivery" },
  { id: 5, name: "Scrap Metal Collection" },
  { id: 6, name: "Food Service" },
  { id: 7, name: "Retail" },
  { id: 8, name: "Dental Appliance Lab" },
  { id: 9, name: "Consulting" },
  { id: 10, name: "Massage Therapy" },
  { id: 11, name: "Psychologist" },
  { id: 12, name: "Construction" },
  { id: 13, name: "Snow Removal" },
  { id: 14, name: "Music" },
  { id: 15, name: "Interior Design Management" },
];

export default function ServicesCard() {
  return (
    <section className="p-4 w-full flex justify-center">
      {/* The main card container */}
      <div className="w-full max-w-4xl p-8 rounded-2xl bg-white border border-gray-200 border-opacity-80 shadow-sm">
        {/* Grid logic: 
          1 column on mobile (grid-cols-1)
          2 columns on small tablets (sm:grid-cols-2)
          3 columns on desktop (md:grid-cols-3)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
          {services.map((service) => (
            <div key={service.id} className="flex items-center gap-3 group">
              {/* Icon - Using 'shrink-0' to prevent the icon from squishing if text is long */}
              <HiCheckCircle className="text-green-500 text-xl shrink-0 opacity-90" />

              <span className="text-slate-800 font-medium">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
