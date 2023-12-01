import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between bg-[#ffffff] px-4 py-4">
      <Link
        className="px-4 font-raleway tracking-tight text-[#928ce5] sm:text-[2rem]"
        href="/"
        target="_self"
      >
        Sarah Meyers
      </Link>
      <div className="flex items-center justify-center gap-8 px-4 py-2">
        <Link
          className="font-raleway  text-[#413e66]"
          href="/resume"
          target="_self"
        >
          Resume
        </Link>
        <Link
          className="font-raleway text-[#413e66]"
          href="https://www.linkedin.com/in/sarah-meyers-sm/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </header>
  );
}
