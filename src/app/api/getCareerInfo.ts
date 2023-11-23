"use server";

import { ethosViewApi } from "./ethosAPI";

async function getCareerInfo(page: string, limit: string, search: string) {
  try {
    const response = await ethosViewApi.get(
      `/karir/info?page=${page}&limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getCareerInfo;
