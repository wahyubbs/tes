import getAllProducts from "@/app/api/getAllProducts";
import getProductById from "@/app/api/getProductById";
import getProductsByCat from "@/app/api/getProductsByCat";
import ProductContent from "@/components/products/productDetail/ProductContent";

interface queryParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: queryParams) {
  const decodeSlug = atob(params.slug.replaceAll("%3D", "="));
  const dataProduct = await getProductById(decodeSlug);
  return {
    title: `${dataProduct[0].judulnya}`,
    keywords: [
      dataProduct[0]?.judulnya,
      dataProduct[0]?.keyword,
      dataProduct[0]?.kategori,
    ],
    description: dataProduct[0]?.isinya,
    alternates: {
      canonical: `/produk/${params.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const resp = await getAllProducts("0", "100000000000", "");
  return resp.data?.map((item: any) => ({
    slug: btoa(item.slugnya),
  }));
}

async function ProductDetail({ params }: queryParams) {
  const { slug } = params;
  const decodeSlug = atob(slug.replaceAll("%3D", "="));
  const productById = await getProductById(decodeSlug);
  const productsByTag = await getProductsByCat(productById[0].kategori);
  return (
    <ProductContent
      product={productById ? productById[0] : null}
      otherProduct={productsByTag ? productsByTag : null}
    />
  );
}

export default ProductDetail;
