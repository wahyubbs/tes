import { ethosViewApi } from "./ethosAPI";

async function getNewsById(slug: string) {
  try {
    const response = await ethosViewApi.get(`/news/${slug}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getNewsById;
