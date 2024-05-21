import React, { ReactNode, MouseEvent } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  addClass?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  name?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  addClass,
  onClick,
  disabled,
  name,
}) => {
  return (
    <button
      onClick={onClick}
      name={name}
      disabled={disabled}
      className={
        "group flex justify-center items-center relative cursor-pointer py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-primary hover:shadow-xl transition-all outline-none " +
        addClass
      }
    >
      {children}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-black opacity-40 group-hover:animate-shine" />
    </button>
  );
};

export default ButtonPrimary;
