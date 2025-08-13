import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary" | "outlined" | "ghost";
};

export default function Banner({
  title,
  description,
  variant = "default",
}: Props) {
  const bannerClass = clsx("p-3 md:p-4 rounded-lg w-[95%] mx-auto", {
    "bg-primary text-white": variant === "primary" || variant === "default",
    "bg-transparent text-white": variant === "secondary",
    "border-3 border-primary shadow-lg shadow-primary/30":
      variant === "outlined",
  });
  const dotClass = clsx("w-3 h-3 rounded-full inline-block", {
    "bg-primary": variant === "primary" || variant === "default",
    "bg-white": variant === "secondary",
    "border border-primary bg-primary": variant === "outlined",
    "border border-gray-400 bg-black": variant === "ghost",
  });
  return (
    <div className={bannerClass}>
      <div className="flex flex-1 justify-center items-center gap-2 md:gap-3 mb-2">
        <span className={dotClass}></span>
        <h2 className="text-base sm:text-lg md:text-2xl font-bold text-center">
          {title}
        </h2>
        <span className={dotClass}></span>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-center leading-snug md:leading-normal">
        {description}
      </p>
    </div>
  );
}
