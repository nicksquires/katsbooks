import { ReactNode, ReactElement } from "react";

interface IconCardProps {
  icon: ReactElement;
  title: string;
  children: ReactNode;
}

export const IconCard = ({ icon, title, children }: IconCardProps) => {
  return (
    <div
      className="flex flex-col w-full h-full bg-white rounded-3xl 
    shadow-lg border border-slate-200 overflow-hidden"
    >
      {/* Upper Half: Large Icon */}
      <div className="flex justify-center items-center p-8 bg-slate-50">
        <div className="text-8xl text-stone-900 opacity-90">{icon}</div>
      </div>

      {/* Middle: Title Banner */}
      <div className="bg-stone-900 opacity-90 py-3">
        <h2 className="text-center text-xl font-bold text-white tracking-widest uppercase">
          {title}
        </h2>
      </div>

      {/* Bottom Half: Content */}
      <div className="grow p-6 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};
