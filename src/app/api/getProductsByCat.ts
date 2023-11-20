import { ethosViewApi } from "./ethosAPI";

async function getProductsByCat(cat: string) {
  try {
    const response = await ethosViewApi.get(`v2/product/${cat}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getProductsByCat;
