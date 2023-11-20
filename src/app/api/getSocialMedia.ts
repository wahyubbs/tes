import { ethosViewApi } from "./ethosAPI";

async function getSocialMedia() {
  try {
    const response = await ethosViewApi.get(`/sosialmedia/info`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getSocialMedia;
