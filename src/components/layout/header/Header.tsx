import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#ffffff]">
      <div className="mx-auto flex max-w-screen-2xl justify-between px-10 py-4">
        <Link className="px-4" href="/" target="_self">
          <Image
            src="/images/sm-high-resolution-logo-transparent.png"
            alt="Sarah Meyers Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center justify-center gap-8 px-4 py-2">
          <Link
            className="font-raleway text-[#413e66]"
            href="/resume"
            target="_self"
          >
            Resume
          </Link>
          <Link
            className="font-raleway text-[#413e66]"
            href="/photography"
            target="_self"
          >
            Photography
          </Link>
          <Link
            className="font-raleway text-[#413e66]"
            href="https://www.linkedin.com/in/sarah-meyers-sm/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </header>
  );
}
