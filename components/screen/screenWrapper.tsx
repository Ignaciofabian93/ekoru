import Navbar from "../navigation/navbar";

export default function ScreenWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-screen">
      <Navbar />
      <div className="w-full pt-[80px]">{children}</div>
    </main>
  );
}
