import Image from "next/image";

export default function App() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-black">
      <Image
        src="/images/PROXIMAMENTE.jpg"
        alt="Logo Ekoru"
        width={4096}
        height={996}
        className="w-full h-full object-contain"
      />
    </main>
  );
}
