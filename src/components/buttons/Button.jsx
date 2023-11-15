import { FaTrashAlt } from "react-icons/fa";

const Button = ({ variant, icon, children, handleClick }) => {
  const variantStyles = {
    light: "bg-white text-gray-500",
    danger: "bg-red-600 shadow-red-400/40 text-white",
  };

  const variantIcons = {
    danger: <FaTrashAlt />,
  };

  return (
    <button
      className={`flex gap-2 items-center justify-center py-2 px-4 font-medium shadow-md rounded-lg ${variantStyles[variant]}`}
      onClick={handleClick}
    >
      {icon && variant === "danger" && variantIcons[variant]}
      {children}
    </button>
  );
};

export default Button;
