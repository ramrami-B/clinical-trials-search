import axios from "axios";

class AxiosClient {
  #baseURL;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
  }

  async getTerms(term: string, options = {}) {
    try {
      const res = await axios.get(this.#baseURL + `data?q=${term}`);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  }
}

export const axiosClient = new AxiosClient(
  "https://preonboardingapiserver.vercel.app/api/"
);
