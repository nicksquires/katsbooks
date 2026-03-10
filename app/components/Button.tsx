import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: "green" | "orange" | "teal"; // union type safety
}

const Button = ({ children, color }: Props) => {
  // Map color props to specific Tailwind classes
  const colorVariants = {
    green: "bg-green-600",
    orange: "bg-orange-500",
    teal: "bg-teal-500",
  };

  // Base stylings for all Button components
  const baseStyles = `
    text-white mt-4 w-fit px-8 py-3 
    opacity-85 text-2xl rounded-full shadow-lg 
    transition-all duration-210 ease-in-out cursor-pointer 
    hover:scale-101 hover:opacity-95 hover:shadow-xl 
    active:scale-100 active:shadow-md
  `;

  return (
    <button className={`${colorVariants[color]} ${baseStyles}`}>
      {children}
    </button>
  );
};

export default Button;
