import Link from "next/link";
import type { HTMLAttributeAnchorTarget, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type Props = {
  variant?: ButtonVariant; // Optional prop, defaults to primary
  display: ReactNode;
  href: string;
  target: HTMLAttributeAnchorTarget | undefined;
};

export default function Button({
  variant = "primary",
  display,
  href,
  target,
}: Props) {
  const getClassName = (variant: ButtonVariant) => {
    const primaryClass =
      "rounded-lg bg-neutral-50 p-3 text-neutral-950 hover:neutral-100";
    const secondaryClass =
      "rounded-lg bg-neutral-950 p-3 text-neutral-50 hover:bg-neutral-900";
    const tertiaryClass =
      "rounded-lg bg-transparent p-3 text-neutral-50 hover:bg-transparent";

    switch (variant) {
      case "primary":
        return primaryClass;
      case "secondary":
        return secondaryClass;
      case "tertiary":
        return tertiaryClass;
      default:
        // Handles unexpected values and ensures type safety
        return primaryClass;
    }
  };
  const className = getClassName(variant);
  return (
    <Link className={className} href={href} target={target}>
      {display}
    </Link>
  );
}
