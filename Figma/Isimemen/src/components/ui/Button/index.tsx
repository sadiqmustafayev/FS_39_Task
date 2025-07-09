interface IButton {
  variant?: "contained" | "outlined" | "text";
  color?: "blue" | "linen" | "white";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
}

const Button = ({
  color = "blue",
  variant = "contained",
  className,
  children,
}: IButton) => {
  const baseStyles =
    "w-max py-4 px-12 rounded-md cursor-pointer transition duration-300 hover:opacity-85";

  const variantStyles = {
    contained: "",
    outlined: "bg-transparent border",
    text: "bg-transparent border border-black rounded-b-3xl rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl",
  };

  const colorStyles = {
    blue: "bg-blue text-black",
    linen: "bg-linen text-black",
    white: "bg-white text-black",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
