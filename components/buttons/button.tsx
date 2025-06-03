import clsx from "clsx";
import Link from "next/link";

type Button = React.ComponentProps<"button"> & {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg" | "full";
  as?: "submit" | "button" | "link";
  href?: string;
  newTab?: boolean;
};

export default function Button({
  text,
  onClick,
  className,
  variant = "primary",
  size = "full",
  as = "button",
  href,
  newTab = false,
  ...rest
}: Button) {
  className = clsx(
    "min-w-[120px]",
    "flex items-center justify-center",
    "rounded-full",
    "font-semibold",
    "disabled:opacity-50",
    "cursor-pointer",
    "disabled:cursor-not-allowed",
    "hover:brightness-115",
    "transition-color ease-in-out duration-300",
    {
      "w-full py-2": size === "full",
      "w-[80%] py-2": size === "lg",
      "w-[60%] py-2": size === "md",
      "w-[50%] py-1": size === "sm",
    },
    {
      "bg-primary text-main-inverted border-[1px] border-primary": variant === "primary",
      "bg-secondary text-primary border-[1px] border-primary": variant === "secondary",
      "bg-danger text-white border-[1px] border-danger": variant === "danger",
    },
    className
  );
  return as === "link" ? (
    <Link href={href as string} target={newTab ? "_blank" : "_self"} className={className}>
      {text}
    </Link>
  ) : (
    <button onClick={onClick} className={className} {...rest}>
      {text}
    </button>
  );
}
