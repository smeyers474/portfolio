import NextImage from "next/image";

type Props = {
    src: string;
    alt: string;
    width: string;
    height: string;
};

export default function Image({src, alt, width, height}: Props) {
  return (
    <div style={{position: "relative", width: width, height: height}}>
        <NextImage
            src={src}
            alt={alt}
            fill
            objectFit="contain"
        />
    </div>
  );
}
