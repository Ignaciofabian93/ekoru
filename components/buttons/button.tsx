import clsx from "clsx";

type Button = {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg" | "full";
  variant?: "primary" | "secondary" | "outline" | "text";
  disabled?: boolean;
};

export default function Button({
  text,
  onClick,
  className,
  size = "md",
  variant = "primary",
  disabled = false,
}: Button) {
  const getBackgroundColor = () => {
    if (disabled) return "bg-gray-background";
    switch (variant) {
      case "primary":
        return "bg-primary hover:bg-secondary";
      case "secondary":
        return "bg-secondary";
      case "outline":
      case "text":
        return "bg-transparent";
      default:
        return "bg-primary";
    }
  };

  const getTextColor = () => {
    if (disabled) return "text-disabled";
    switch (variant) {
      case "primary":
      case "secondary":
        return "text-white";
      case "outline":
        return "text-gray";
      case "text":
        return "text-gray";
      default:
        return "text-gray";
    }
  };

  const getBorderColor = () => {
    if (disabled) return "border-gray-background";

    switch (variant) {
      case "outline":
        return "border-primary";
      default:
        return "border-transparent";
    }
  };

  const getFontSize = () => {
    switch (size) {
      case "sm":
        return "text-sm";
      case "md":
        return "text-base";
      case "lg":
        return "text-lg";
      case "full":
        return "text-xl";
      default:
        return "text-base";
    }
  };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-1/4";
      case "md":
        return "w-1/2";
      case "lg":
        return "w-3/4";
      case "full":
        return "w-10/12";
      default:
        return "w-1/2";
    }
  };

  className = clsx(
    "min-w-[120px] max-w-[350px]",
    getSize(),
    getBackgroundColor(),
    getTextColor(),
    getBorderColor(),
    getFontSize(),
    "px-4 py-2",
    "rounded-full",
    "cursor-pointer",
    "transition-all ease-in-out duration-300",
    className
  );
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
