import clsx from "clsx";

type Button = {
  text: string;
  onClick: () => void;
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

  // const getHeight = () => {
  //   switch (size) {
  //     case "sm":
  //       return 32;
  //     case "md":
  //       return 48;
  //     case "lg":
  //       return 56;
  //     default:
  //       return 48;
  //   }
  // };

  // const getFontSize = () => {
  //   switch (size) {
  //     case "small":
  //       return 14;
  //     case "medium":
  //       return 16;
  //     case "large":
  //       return 18;
  //     default:
  //       return 16;
  //   }
  // };

  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-1/4";
      case "md":
        return "w-1/2";
      case "lg":
        return "w-3/4";
      case "full":
        return "w-full";
      default:
        return "w-1/2";
    }
  };

  className = clsx(
    "min-w-[120px]",
    getSize(),
    getBackgroundColor(),
    getTextColor(),
    getBorderColor(),
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
