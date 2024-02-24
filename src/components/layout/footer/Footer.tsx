import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#ffffff]">
      <div className="flex items-center justify-end">
        <a
          className="contact text-md m-4 font-raleway text-white md:mx-10"
          href="mailto: sarmey47@gmail.com"
        >
          Contact me
        </a>
      </div>
    </footer>
  );
}
