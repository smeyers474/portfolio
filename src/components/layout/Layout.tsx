import { type ReactNode } from "react";
import Header from "./header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f6f5ff]">
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </main>
  );
}
