import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

const photoWidth = "37.5rem";
const photoHeight = "25rem";

export default function Page() {
  return (
    <Layout>
      <section className="my-10 grid auto-rows-[photoHeight] grid-cols-1 gap-4 gap-4 p-4 xl:grid-cols-2">
        <Image
          src="/images/plant.jpg"
          alt="Picture of a plant"
          width={photoWidth}
          height={photoHeight}
        />
        <Image
          src="/images/cityscape.jpg"
          alt="Picture of a cityscape"
          width={photoWidth}
          height={photoHeight}
        />
        <Image
          src="/images/cityscapesunrise.jpg"
          alt="Picture of a cityscape with sun shining"
          width={photoWidth}
          height={photoHeight}
        />
        <Image
          src="/images/succulent.jpg"
          alt="Picture of a succulent"
          width={photoWidth}
          height={photoHeight}
        />
      </section>
    </Layout>
  );
}
