import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

type Props = {
  display: ReactNode;
  href: string;
  target: HTMLAttributeAnchorTarget | undefined;
};

export default function Button({ display, href, target }: Props) {
  return (
    <Link
      className="rounded-lg bg-[#001f3f] p-3 text-white hover:bg-[#413e66]"
      href={href}
      target={target}
    >
      {display}
    </Link>
  );
}
