import NextImage from "next/image";

type Props = {
  src: string;
  alt: string;
  width: string;
  height: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  blur?: string;
  preload?: boolean;
};

export default function Image({
  src,
  alt,
  width,
  height,
  objectFit = "cover",
  blur = "",
  preload = false,
}: Props) {
  return (
    <div style={{ position: "relative", width: width, height: height }}>
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{ objectFit: objectFit }}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur}
        preload={preload}
      />
    </div>
  );
}
