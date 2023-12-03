
import { ethosPostApi } from "./ethosAPI";

async function joinPartnership(dataEmail: string) {
  try {
    const form = new FormData();
    form.append("email", dataEmail);

    ethosPostApi.post("/api/d2/email", form);
  } catch (error) {
    console.error(error);
  }
}

export default joinPartnership;
