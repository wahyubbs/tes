import getAllNews from "./api/getAllNews";
import getAllProducts from "./api/getAllProducts";

export default async function sitemap() {
  const baseUrl = "https://ethosworld.id";

  const ethosDaily = await getAllNews("0", "100000000000", "");
  const ethosDailyUrls =
    ethosDaily.data?.map((item: any) => {
      return {
        url: `${baseUrl}/ethosdaily/${btoa(item.slugnya)}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const products = await getAllProducts("0", "100000000000", "");
  const productUrls =
    products.data?.map((item: any) => {
      return {
        url: `${baseUrl}/produk/${btoa(item.slugnya)}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/produk`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ethosdaily`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tentangkami`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/karir`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/partnership`,
      lastModified: new Date(),
    },
    ...ethosDailyUrls,
    ...productUrls,
  ];
}
