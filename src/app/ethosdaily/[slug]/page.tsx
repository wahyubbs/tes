import getAllNews from "@/app/api/getAllNews";
import getNewsByCat from "@/app/api/getNewsByCat";
import getNewsById from "@/app/api/getNewsById";
import NewsContent from "@/components/ethosDaily/newsDetail/NewsContent";

interface queryParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: queryParams) {
  const decodeSlug = atob(params.slug.replaceAll("%3D", "="));
  const dataNews = await getNewsById(decodeSlug);
  return {
    language: "indonesia",
    title: `${dataNews[0]?.judulnya}`,
    keywords: [
      dataNews[0]?.keyword,
      dataNews[0]?.judulnya,
      dataNews[0]?.tagsnya,
    ],
    description: dataNews[0]?.isicard,
    alternates: {
      canonical: `/ethosdaily/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const resp = await getAllNews("0", "100000000000", "");

  return resp?.data?.map((item: any) => ({
    slug: btoa(item.slugnya),
  }));
}

async function Page({ params }: queryParams) {
  const { slug } = params;
  const decodeSlug = atob(slug.replaceAll("%3D", "="));
  let tags;
  const dataNewsById = await getNewsById(decodeSlug);
  const dataNewsByTags = await getNewsByCat(dataNewsById[0]?.kategori);
  tags = dataNewsById[0]?.tagsnya.split(",");

  return (
    <NewsContent
      dataNewsById={dataNewsById ? dataNewsById : null}
      dataNewsByCat={dataNewsByTags ? dataNewsByTags : null}
      tags={tags}
    />
  );
}

export default Page;
