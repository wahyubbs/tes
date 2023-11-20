import { ethosViewApi } from "./ethosAPI";

export async function getSlider() {
  try {
    const response = await ethosViewApi.get("/slider");

    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
