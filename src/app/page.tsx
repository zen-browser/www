import Features from "@/components/features";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-start">
      <Header />
      <Features />
    </main>   
  );
}
      