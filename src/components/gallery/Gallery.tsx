import Image from "~/components/image/Image";
import { useState } from "react";
import { type ReactNode } from "react";

const photoWidth = "37.5rem";
const photoHeight = "25rem";
const imageData = [
  {
    src: "/images/plant.jpg",
    alt: "Picture of a plant",
  },
  {
    src: "/images/cityscape.jpg",
    alt: "Picture of a cityscape",
  },
  {
    src: "/images/cityscapesunrise.jpg",
    alt: "Picture of a cityscape with sunrise shining",
  },
  {
    src: "/images/succulent.jpg",
    alt: "Picture of a succulent",
  },
  {
    src: "/images/sunset.jpg",
    alt: "Picture of a cityscape with sunset shining",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageDots: ReactNode[] = [];

  const imageItems = imageData.map((item, index) => {
    imageDots.push(
      <div
        className="dot mx-1"
        style={{ backgroundColor: activeIndex === index ? "#413e66" : "#bbb" }}
      ></div>,
    );
    return (
      <Image
        src={item.src}
        alt={item.alt}
        width={photoWidth}
        height={photoHeight}
        key={index}
      />
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
    <div className="scroll-container flex justify-between">
      <button onClick={moveBackward}>
        <Image
          src="/assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg"
          alt="chevron left"
          width="100px"
          height="100px"
        ></Image>
      </button>
      <div className="flex flex-col items-center">
        {imageItems[activeIndex]}
        <div className="mb-1">{imageDots}</div>
      </div>
      <button onClick={moveForward}>
        <Image
          src="/assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg"
          alt="chevron right"
          width="100px"
          height="100px"
        ></Image>
      </button>
    </div>
  );
}
