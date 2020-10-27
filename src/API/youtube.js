import axios from "axios";

const KEY = "AIzaSyBcoFYIDPNUneO4N2UZMcdWHIfYDmVa96A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 6,
  },
});
