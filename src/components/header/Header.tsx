import Button from "~/components/button/Button";

import { MdOpenInNew } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-screen-2xl justify-center px-10 py-4 gap-10">
        <Button
          variant="tertiary"
          href="mailto: sarmey47@gmail.com"
          target={undefined}
          display="Email"
        />
        <Button
          variant="tertiary"
          href="https://www.linkedin.com/in/sarah-meyers-sm/"
          target="_blank"
          display="LinkedIn"
          />
        <Button
          variant="tertiary"
          href="https://github.com/smeyers474"
          target="_blank"
          display="Github"
        />
        <Button
          variant="tertiary"
          href="/resume.pdf"
          target="_blank"
          display={
            <div className="flex items-center gap-1">
              Resume
              <MdOpenInNew />
            </div>
          }
        />
      </div>
    </header>
  );
}
