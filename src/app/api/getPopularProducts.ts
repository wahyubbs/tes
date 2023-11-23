"use server";

import { ethosViewApi } from "./ethosAPI";

async function getPopularProducts() {
  try {
    const response = await ethosViewApi.get("/produk/populer");

    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getPopularProducts;
