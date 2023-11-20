import { ethosViewApi } from "./ethosAPI";
export const revalidate = 5;
async function getNews() {
  try {
    const response = await ethosViewApi.get("/news");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getNews;
