import axios from "axios";

class AxiosClient {
  #baseURL;

  constructor(baseURL: string | undefined) {
    this.#baseURL = baseURL;
  }

  async search(query: string) {
    try {
      const res = await axios.get(this.#baseURL + `?q=${query}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export const Axios = new AxiosClient(process.env.BASE_URL);
