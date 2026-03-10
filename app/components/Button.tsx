import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
}

const Button = ({ children, color }: Props) => {
  if (color === "green")
    return (
      <button
        className="
        flex items-center justify-center gap-2

        bg-green-600
        text-white
         mt-4 
         w-fit 
         px-8 
         py-3
         
         opacity-85
         text-2xl
         rounded-full
         shadow-lg

         transition-all 
         duration-210 
         ease-in-out 
         cursor-pointer
        
         hover:scale-101
         hover:opacity-95
         hover:shadow-xl
        
         active:scale-100 
         active:shadow-md
        "
      >
        {children}
      </button>
    );
  else if (color === "orange")
    return (
      <button
        className="
        flex items-center justify-center gap-2

        bg-orange-500 
        text-white
         mt-4 
         w-fit 
         px-8 
         py-3
         
         opacity-85
         text-2xl
         rounded-full
         shadow-lg

         transition-all 
         duration-210 
         ease-in-out 
         cursor-pointer
        
         hover:scale-101
         hover:opacity-95
         hover:shadow-xl
        
         active:scale-100 
         active:shadow-md
         "
      >
        {children}
      </button>
    );
  else if (color === "teal")
    return (
      <button
        className="
        flex items-center justify-center gap-2

        bg-teal-500 
        text-white
         mt-4 
         w-fit 
         px-8 
         py-3
         
         opacity-85
         text-2xl
         rounded-full
         shadow-lg

         transition-all 
         duration-210 
         ease-in-out 
         cursor-pointer
        
         hover:scale-101
         hover:opacity-95
         hover:shadow-xl
        
         active:scale-100 
         active:shadow-md
         "
      >
        {children}
      </button>
    );
};

export default Button;
