import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

const photoWidth = "37.5rem"
const photoHeight = "25rem"

export default function Page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 ">
        <div className="flex flex-row items-center justify-center gap-4">
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
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
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
        </div>
      </div>
    </Layout>
  );
}
