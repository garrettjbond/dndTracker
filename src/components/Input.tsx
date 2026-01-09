import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
  extraStyles?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder = "", extraStyles = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`min-w-72 sm:min-w-96 font-normal bg-lightgrey border-b-2 border-primaryB h-14 pl-5 focus:border-black outline-none transition-colors duration-200 my-2 m-auto ${extraStyles}`}
      {...props}
    />
  );
};

export default Input;