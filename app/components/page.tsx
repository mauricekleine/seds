import type { ReactNode } from "react";

import Image from "~/components/image";

type Props = {
  children: ReactNode | ReactNode[];
  image?: {
    name: string;
  };
  intro: string;
  title: string;
};

const Page = ({ children, image, intro, title }: Props) => (
  <div className="mb-4">
    {image?.name ? <Image alt={title} name={image.name} title={title} /> : null}

    <div className="bg-green-600 text-white py-2 px-4">{intro}</div>

    <div>{children}</div>
  </div>
);

export default Page;
