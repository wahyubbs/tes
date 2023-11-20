import { ethosViewApi } from "./ethosAPI";

export async function getAboutUs() {
  try {
    const response = await ethosViewApi.get("/tentangkami");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function getHistory() {
  try {
    const response = await ethosViewApi.get("/tentangkami/sejarah");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getVisionMision() {
  try {
    const response = await ethosViewApi.get("/visimisi");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getLeaders() {
  try {
    const response = await ethosViewApi.get("tentang/parapemimpin");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCEO() {
  try {
    const response = await ethosViewApi.get("tentang/ceo");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getStructur() {
  try {
    const response = await ethosViewApi.get("tentang/struktur");
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
