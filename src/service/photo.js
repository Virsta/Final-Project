import api from "../config/api";

const photoService = {
  getCurated: async function () {
    const data = await api.request("GET", `curated?api_key=page=1&per_page=80`);

    return data;
  },
  searchPhoto: async function (query) {
    if (!query) {
      throw new Error("Empty query!");
    }
    const data = await api.request("GET", `search?query=${query}&per_page=80`);

    return data;
  },
  getPhoto: async (id) => {
    const data = await api.request("GET", `photos/${id}`);

    return data;
  },
  // paginationPhoto: async (page) => {
  //   const data = await api.request("GET", `curated?api_key=page=${page}&per_page=20`
  //   );

  //   return data;
  // },
};

export default photoService;
