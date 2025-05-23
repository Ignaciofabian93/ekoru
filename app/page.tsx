import Image from "next/image";

export default function App() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-6">Próximamente</h1>
      <div className="w-[60%]">
        <Image src="/images/logo.png" alt="Logo Ekoru" width={4096} height={996} />
      </div>
    </main>
  );
}
