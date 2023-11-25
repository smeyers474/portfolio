import { ReactNode } from "react";
import Header from "./header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EBE3F1] to-[#CBC0D3]">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
