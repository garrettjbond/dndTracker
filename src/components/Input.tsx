import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type = "text", placeholder = "", ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="font-normal bg-lightgrey border-b-2 border-primaryB h-14 pl-5 focus:border-black outline-none transition-colors duration-200 m-2"
      {...props}
    />
  );
};

export default Input;