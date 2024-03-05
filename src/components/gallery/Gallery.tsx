import Image from "~/components/image/Image";
import * as Blur from "./Blur";
import { useState } from "react";
import { type ReactNode } from "react";

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
        className="dot mx-1"
        key={"dot-" + index}
        style={{ backgroundColor: activeIndex === index ? "#413e66" : "#bbb" }}
      ></div>,
    );
    return (
      <div className="active-image" key={index}>
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
      <div className="active-image" key={index}>
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
    <div className="scroll-container">
      <div className="flex justify-center md:justify-between">
        <button className="hidden md:block" onClick={moveBackward}>
          <Image
            src="/assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg"
            alt="chevron left"
            width="100px"
            height="100px"
          ></Image>
        </button>
        <div className="flex flex-col items-center">
          <div className="hidden md:block">{imageItems[activeIndex]}</div>
          <div className="block md:hidden">{imageItemsSmall[activeIndex]}</div>
          <div className="mb-1">{imageDots}</div>
        </div>
        <button className="hidden md:block" onClick={moveForward}>
          <Image
            src="/assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg"
            alt="chevron right"
            width="100px"
            height="100px"
          ></Image>
        </button>
      </div>
      <div className="flex items-center justify-between md:hidden">
        <button
          className="flex w-[50%] justify-center pb-5"
          onClick={moveBackward}
        >
          <Image
            src="/assets/chevron_left_FILL0_wght400_GRAD0_opsz24.svg"
            alt="chevron left"
            width="50px"
            height="50px"
          ></Image>
        </button>
        <button
          className="flex w-[50%] justify-center pb-5"
          onClick={moveForward}
        >
          <Image
            src="/assets/chevron_right_FILL0_wght400_GRAD0_opsz24.svg"
            alt="chevron right"
            width="50px"
            height="50px"
          ></Image>
        </button>
      </div>
    </div>
  );
}
