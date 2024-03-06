import { type ReactNode } from "react";
import Header from "./header/Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
