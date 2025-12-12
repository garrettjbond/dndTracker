interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  const baseClasses =
    "shadow-md text-base p-2 inline-block cursor-pointer rounded-sm border-2 border-solid font-medium transition-colors mx-5";

  const variants = {
    primary:
      "text-white bg-primary border-primary hover:bg-transparent hover:text-primary",
    secondary:
      "text-primary bg-transparent border-primary hover:bg-primary hover:text-white",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
