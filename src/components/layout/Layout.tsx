import { type ReactNode } from "react";
import Header from "./header/Header";
import Cursor from "../cursor/Cursor";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-white">
      <Cursor />
      <Header />
      {children}
    </main>
  );
}
