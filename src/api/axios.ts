import axios from "axios";
import env from "../config/env";

const BASE_URL = env.BASE_URL;

class AxiosClient {
  #baseURL;

  constructor(baseURL: string | undefined) {
    this.#baseURL = baseURL;
  }

  async search(query: string) {
    try {
      const res = await axios.get(this.#baseURL + `?q=${query}`);
      console.info("api 호출");
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const Axios = new AxiosClient(BASE_URL);
