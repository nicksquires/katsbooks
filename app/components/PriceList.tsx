import React from "react";

interface PriceItem {
  category: string;
  rate: string;
}

const prices: PriceItem[] = [
  { category: "Small Business Taxes (non-corporate)", rate: "$125" },
  { category: "Personal Taxes (Adult)", rate: "$50/person" },
  { category: "Personal Taxes (Couple)", rate: "$75/couple" },
  { category: "Personal Taxes (Student)", rate: "$25/student" },
  { category: "Monthly Fees", rate: "SERVICE-DEPENDENT" },
];

export const PriceList: React.FC = () => {
  return (
    <div className="w-full min-w-md max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-orange-600 p-4">
        <h2 className="text-center text-xl font-bold text-white tracking-widest">
          MY RATES
        </h2>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-4 text-sm font-bold text-slate-600 uppercase tracking-wider">
              Rate
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {prices.map((item, index) => (
            <tr key={index} className="hover:bg-orange-50 transition-colors">
              <td className="px-6 py-4 text-slate-700 font-medium">
                {item.category}
              </td>
              <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">
                {item.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
