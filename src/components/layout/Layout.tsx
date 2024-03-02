import { type ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
