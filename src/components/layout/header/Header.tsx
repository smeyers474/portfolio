import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between px-4 py-4">
      <Link
        className="font-extrabold tracking-tight text-black sm:text-[2rem] px-4"
        href="/"
        target="_self"
      >
        Sarah Meyers
      </Link>
      <div className="flex items-center justify-center gap-8 px-4 py-2">
        <Link className="font-bold" href="/resume" target="_self">
          Resume
        </Link>
        <Link className="font-bold" href="https://www.linkedin.com/in/sarah-meyers-sm/"
            target="_blank">
          LinkedIn
        </Link>
      </div>
    </header>
  );
}
