"use server";

import { ethosViewApi } from "./ethosAPI";

async function getNewsByCat(category: string) {
  try {
    const response = await ethosViewApi.get(`/v2/news/${category}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getNewsByCat;
