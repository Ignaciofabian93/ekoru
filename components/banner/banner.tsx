import clsx from "clsx";

type Banner = {
  title: string;
  description: React.ReactNode;
  image?: string;
};

export default function Banner({ title, description }: Banner) {
  return (
    <section
      className={clsx(
        "w-[70%] h-[100px]",
        "p-4",
        "my-8 mx-auto",
        "border-[5px] border-primary",
        "rounded-[11px]",
        "flex flex-col items-center justify-center"
      )}
    >
      <div className="w-full flex items-center justify-center">
        <span className="w-[17px] h-[17px] rounded-full bg-primary mx-4" />
        <h3 className="text-[28px]">{title}</h3>
        <span className="w-[17px] h-[17px] rounded-full bg-primary mx-4" />
      </div>
      <div className="text-[24px]">{description}</div>
    </section>
  );
}
