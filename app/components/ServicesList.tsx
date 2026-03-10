import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const services = [
  "Payroll Maintenance",
  "Accounts Payable Management",
  "Accounts Receivable Management",
  "CRA Compliance & Remittances",
  "CRA Registration & Maintenance",
  "Bank Entry Maintenance & Reconciliations",
  "Bill Payment Services Available",
  "Personal Tax Services",
];

export const ServicesList: React.FC = () => {
  return (
    <div className="w-full min-w-sm max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 p-4">
        <h2 className="text-center text-xl font-bold text-white tracking-widest">
          SERVICES
        </h2>
      </div>
      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-1 md:gap-3 py-2 border-b border-slate-50 last:border-0 md:border-0"
            >
              <HiCheckCircle className="text-green-500 text-2xl md:text-3xl shrink-0 mr-6" />
              <span className="text-slate-700 font-medium text-sm xl:text-md">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
