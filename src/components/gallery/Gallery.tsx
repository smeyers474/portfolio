import Image from "~/components/image/Image";
import * as Blur from "./Blur";
import { useState } from "react";
import { type ReactNode } from "react";

import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import styles from "./styles.module.css";

const photoWidth = "37.5rem";
const photoHeight = "25rem";
const photoWidthSmall = "18.75rem";
const photoHeightSmall = "12.5rem";
const imageData = [
  {
    src: "/images/plant.jpg",
    alt: "Picture of a plant",
    blur: Blur.plant,
  },
  {
    src: "/images/cityscape.jpg",
    alt: "Picture of a cityscape",
    blur: Blur.cityscape,
  },
  {
    src: "/images/cityscapesunrise.jpg",
    alt: "Picture of a cityscape with sunrise shining",
    blur: Blur.cityscapesunrise,
  },
  {
    src: "/images/succulent.jpg",
    alt: "Picture of a succulent",
    blur: Blur.succulent,
  },
  {
    src: "/images/sunset.jpg",
    alt: "Picture of a cityscape with sunset shining",
    blur: Blur.sunset,
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageDots: ReactNode[] = [];

  const imageItems = imageData.map((item, index) => {
    imageDots.push(
      <div
        className={`${styles.dot} mx-1 ${
          activeIndex === index ? "bg-neutral-800" : "bg-neutral-400"
        }`}
        key={"dot-" + index}
      ></div>,
    );
    return (
      <div className={`${styles.photo}`} key={index}>
        <Image
          src={item.src}
          alt={item.alt}
          blur={item.blur}
          width={photoWidth}
          height={photoHeight}
        />
      </div>
    );
  });

  const imageItemsSmall = imageData.map((item, index) => {
    return (
      <div className={`${styles.photo}`} key={index}>
        <Image
          src={item.src}
          alt={item.alt}
          blur={item.blur}
          width={photoWidthSmall}
          height={photoHeightSmall}
        />
      </div>
    );
  });

  const moveBackward = () => {
    if (activeIndex === 0) {
      setActiveIndex(imageItems.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const moveForward = () => {
    if (activeIndex === imageItems.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className={`${styles.gallery}`}>
      <div className="flex items-center justify-center gap-10 md:justify-between">
        <button
          className="hidden rounded-full bg-neutral-50 md:block"
          onClick={moveBackward}
        >
          <MdArrowLeft size={"5em"} color="#0a0a0a" />
        </button>
        <div className="flex flex-col items-center rounded-lg bg-neutral-50 px-1">
          <div className="hidden md:block">{imageItems[activeIndex]}</div>
          <div className="block md:hidden">{imageItemsSmall[activeIndex]}</div>
          <div className="mb-1">{imageDots}</div>
        </div>
        <button
          className="hidden rounded-full bg-neutral-50 md:block"
          onClick={moveForward}
        >
          <MdArrowRight size={"5em"} color="#0a0a0a" />
        </button>
      </div>
      <div className="mt-5 flex items-center justify-center gap-5 md:hidden">
        <button className="rounded-full bg-neutral-50" onClick={moveBackward}>
          <MdArrowLeft size={"5em"} color="#0a0a0a" />
        </button>
        <button className="rounded-full bg-neutral-50" onClick={moveForward}>
          <MdArrowRight size={"5em"} color="#0a0a0a" />
        </button>
      </div>
    </div>
  );
}
