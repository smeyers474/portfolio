import dynamic from "next/dynamic";

/**
 * Critical: prevents "TypeError: url.replace is not a function" error
 */
const Resume = dynamic(() => import("./Resume.tsx"), {
  ssr: false,
});

export default function Page() {
  return <Resume />;
}
