import getAllNews from "@/app/api/getAllNews";
import getNewsByCat from "@/app/api/getNewsByCat";
import getNewsById from "@/app/api/getNewsById";
import NewsContent from "@/components/ethosDaily/newsDetail/NewsContent";
import HeaderMenu from "@/components/header/HeaderMenu";
import FollowUs from "@/components/sideContent/FollowUs";
import NewsLetter from "@/components/sideContent/NewsLetter";
import Search from "@/components/sideContent/Search";
import PopularNews from "@/components/sideContent/popularNews/PopularNews";
import styles from "@/styles/news/index.module.scss";
import { notFound } from "next/navigation";

interface queryParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: queryParams) {
  let decodeSlug;
  let dataNews;

  try {
    decodeSlug = atob(params.slug.replaceAll("%3D", "="));
    dataNews = await getNewsById(decodeSlug!);
  } catch (error) {
    return notFound();
  }
  if (!dataNews) return notFound();
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

export const dynamic = "force-static";

export async function generateStaticParams() {
  const resp = await getAllNews("0", "100000000000", "");
  return resp?.data?.map((item: any) => ({
    slug: item.slugnya ? btoa(item.slugnya) : "404",
  }));
}

async function Page({ params }: queryParams) {
  const { slug } = params;
  let decodeSlug;
  let tags;
  let dataNewsById;
  let dataNewsByTags;

  try {
    decodeSlug = atob(slug.replaceAll("%3D", "="));
    dataNewsById = await getNewsById(decodeSlug!);
    dataNewsByTags = await getNewsByCat(dataNewsById[0]?.kategori);
    tags = dataNewsById[0]?.tagsnya.split(",");
  } catch (error) {
    return notFound();
  }
  return (
    <>
      <HeaderMenu
        title="ETHOS DAILY"
        imageURL={"Daily"}
        path={`Ethos Daily / ${decodeSlug}`}
      />
      <div className={styles["content-bbs"]}>
        <NewsContent
          dataNewsById={dataNewsById ? dataNewsById : null}
          dataNewsByCat={dataNewsByTags ? dataNewsByTags : null}
          tags={tags}
        />

        <div className={styles["side-content-bbs"]}>
          <Search type="news" />
          {/* <Type useChecklist={false} title="Kategori" dataDropdown={category} /> */}
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
        <div className={styles["side-content-mobile-bbs"]}>
          <PopularNews />
          {/* <Tags /> */}
          <NewsLetter />
          <FollowUs />
        </div>
      </div>
    </>
  );
}

export default Page;
