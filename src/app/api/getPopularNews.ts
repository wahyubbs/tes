import { ethosViewApi } from "./ethosAPI";

async function getPopularNews() {
  try {
    const response = await ethosViewApi.get("/news/populer");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getPopularNews;
