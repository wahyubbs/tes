import { ImageResponse } from "next/server";

import getNewsById from "@/app/api/getNewsById";

export const size = {
  width: 1200,
  height: 630,
};
export const alt = "Ethos Daily";
export const contentType = "image/png";

export default async function og({ params }: { params: { slug: string } }) {
  const decodeSlug = atob(params.slug.replaceAll("%3D", "="));

  const data = await getNewsById(decodeSlug);
  return new ImageResponse(
    (
      <div>
        <img
          src={`${
            process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL_IMG
              : process.env.NEXT_PUBLIC_URL_IMG
          }${data[0].image}&w=1200&h=630&auto=format&q=75`}
          alt={data[0].judulnya}
        />
      </div>
    ),
    size
  );
}
