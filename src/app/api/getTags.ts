import { ethosViewApi } from "./ethosAPI";

async function getTags() {
  try {
    const response = await ethosViewApi.get("/tags");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getTags;
