import getAllProducts from "@/app/api/getAllProducts";
import getProductById from "@/app/api/getProductById";
import getProductsByCat from "@/app/api/getProductsByCat";
import HeaderMenu from "@/components/header/HeaderMenu";
import ProductContent from "@/components/products/productDetail/ProductContent";
import Search from "@/components/sideContent/Search";
import PopularProducts from "@/components/sideContent/popularProducts/PopularProducts";
import styles from "@/styles/products/index.module.scss";
import { notFound } from "next/navigation";

interface queryParams {
  params: { slug: string };
}

export async function generateMetadata({ params }: queryParams) {
  let decodeSlug;
  let dataProduct;
  try {
    decodeSlug = atob(params.slug.replaceAll("%3D", "="));
    dataProduct = await getProductById(decodeSlug!);
  } catch (error) {
    return notFound();
  }
  if (!dataProduct) return notFound();

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

export const dynamic = "force-static";

export async function generateStaticParams() {
  const resp = await getAllProducts("0", "100000000000", "");
  return resp.data?.map((item: any) => ({
    slug: item.slugnya ? btoa(item.slugnya) : "404",
  }));
}

async function ProductDetail({ params }: queryParams) {
  const { slug } = params;
  let decodeSlug;
  let productById;
  let productsByTag;
  try {
    decodeSlug = atob(slug.replaceAll("%3D", "="));
    productById = await getProductById(decodeSlug!);
    productsByTag = await getProductsByCat(productById[0].kategori);
  } catch (error) {
    return notFound();
  }
  return (
    <>
      <HeaderMenu
        title="PRODUCTS"
        imageURL={"produk"}
        path={`Produk / ${decodeSlug}`}
      />
      <div className={styles["content-container-bbs"]}>
        <div className={`${styles["side-content-bbs"]} `}>
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <Search type="product" />
          <div className={`${styles["destop-bbs"]}`}>
            <PopularProducts />
          </div>
        </div>
        <div className={styles["content-bbs"]}>
          <div className={styles["products-container-bbs"]}>
            <ProductContent
              product={productById ? productById[0] : null}
              otherProduct={productsByTag ? productsByTag : null}
            />
          </div>
        </div>
        <div
          className={`${styles["side-content-bbs"]} ${styles["mobile-bbs"]}`}
        >
          {/* <Type useChecklist={true} title="Kategori" dataDropdown={category} /> */}
          <PopularProducts />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
