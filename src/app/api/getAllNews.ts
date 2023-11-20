import { ethosViewApi } from "./ethosAPI";

async function getAllNews(page: string, limit: string, search: string) {
  try {
    const response = await ethosViewApi.get(
      `/news/lengkap?page=${page}&limit=${limit}&search=${search}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getAllNews;
