import axios from "axios";
import { api } from "../config/api.config";

const CodexmakerApi = async (method, path, body = null, options = null) => {
  switch (method) {
    case "POST":
      const data = await axios
        .post(`${api.backendProductionUri}${path}`, body)
        .then(async (r) => {
          return r.data;
        })
        .catch(async (e) => {
          return e.response.data;
        });
      return data;

    default:
      break;
  }
};

export default CodexmakerApi;
