"use server";

import { ethosViewApi } from "./ethosAPI";

async function getHeaderMenu(name: string) {
  try {
    const response = await ethosViewApi.get(`/slider/${name}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default getHeaderMenu;
