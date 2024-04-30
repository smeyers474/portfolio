import styles from "./styles.module.css";
import { Pacifico, Raleway_Dots } from "next/font/google";

const font = Pacifico({
    subsets: ["latin"],
    weight: "400",
});
  

type Props = {
    text: string;
};

export default function ScrollingText({ text }: Props) {
  return (
    <div className={`${styles.container}`}>
        <div className={`tracking-widest text-9xl text-[#001f3f] ${styles.text} ${font.className}`}>
          <p className="mr-60 inline-block">{text}</p>
          <p className="mr-60 inline-block">{text}</p>
          <p className="mr-60 inline-block">{text}</p>
          <p className="mr-60 inline-block">{text}</p>
        </div>
    </div>
  );
}
