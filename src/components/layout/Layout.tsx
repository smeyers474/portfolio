import { type ReactNode } from "react";
import Header from "../header/Header";
import Cursor from "../cursor/Cursor";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen bg-neutral-950">
      <Cursor />
      <Header />
      {children}
    </main>
  );
}
