import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'aa1fd5c7f9024296887d194b18ed558d'
  }
})