import Link from "next/link";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  href,
  className,
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-pink-500 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "success":
        return "bg-violet-600 text-white";
      case "danger":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  const buttonClass = `py-2 px-4  rounded-3xl hover:opacity-80 focus:outline-none ${getVariantClass()} ${className}`;

  if (href) {
    return (
      <Link href={href}>
        <a className={buttonClass}>{text}</a>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} >
      {text}
    </button>
  );
};

export default Button;
