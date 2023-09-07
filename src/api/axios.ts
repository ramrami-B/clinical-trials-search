import axios from "axios";
import { API_BASE_URL } from "../constants/url";

class AxiosClient {
  #baseURL;

  constructor(baseURL: string | undefined) {
    this.#baseURL = baseURL;
  }

  async search(query: string) {
    try {
      const res = await axios.get(this.#baseURL + `?q=${query}`);
      console.info("api");
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const Axios = new AxiosClient(API_BASE_URL);
