import { ethosViewApi } from "./ethosAPI";

async function getProductById(slug: string) {
  try {
    const response = await ethosViewApi.get(`/product/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProductById;
