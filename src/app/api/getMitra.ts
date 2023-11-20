import { ethosViewApi } from "./ethosAPI";
export const revalidate = 5;

export async function getMitra() {
  try {
    const response = await ethosViewApi.get("/mitra/info");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
