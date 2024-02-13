import Layout from "~/components/layout/Layout";
import Image from "~/components/image/Image";

export default function Page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-4 ">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src="/images/plant.jpg"
            alt="Picture of a plant"
            width="40vw"
            height="40vh"
          />
          <Image
            src="/images/cityscape.jpg"
            alt="Picture of a cityscape"
            width="40vw"
            height="40vh"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src="/images/cityscapesunrise.jpg"
            alt="Picture of a cityscape with sun shining"
            width="40vw"
            height="40vh"
          />
          <Image
            src="/images/succulent.jpg"
            alt="Picture of a succulent"
            width="40vw"
            height="40vh"
          />
        </div>
      </div>
    </Layout>
  );
}
