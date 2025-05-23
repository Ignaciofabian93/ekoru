import clsx from "clsx";

type InfoSection = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function InfoSection({ id, children, className }: InfoSection) {
  return (
    <section id={id}>
      <div className={clsx("w-full h-full", "px-4 py-6", "flex flex-col items-start justify-between", className)}>
        {children}
      </div>
    </section>
  );
}
