import Image from "~/components/image/Image";

const photoWidth = "37.5rem";
const photoHeight = "25rem";
const imageData = [
    {
        src: "/images/plant.jpg",
        alt: "Picture of a plant"
    },
    {
        src: "/images/cityscape.jpg",
        alt: "Picture of a cityscape"
    },
    {
        src: "/images/cityscapesunrise.jpg",
        alt: "Picture of a cityscape with sunrise shining"
    },
    {
        src: "/images/succulent.jpg",
        alt: "Picture of a succulent"
    },
    {
        src: "/images/sunset.jpg",
        alt: "Picture of a cityscape with sunset shining"
    }
];

export default function Gallery() {
    const imageItems = imageData.map(item => {
        return (
            <Image
                src={item.src}
                alt={item.alt}
                width={photoWidth}
                height={photoHeight}
            />
        )
    });

    return (
        <div className="scroll-container">{imageItems}</div>
    );
}
