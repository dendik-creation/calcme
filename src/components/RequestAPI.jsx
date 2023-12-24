import axios from "axios";

import React from "react";

export const findCity = async (query) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const options = {
    q: query ? query : null,
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    units: "metric",
    lang: "id",
  };
  if (query) {
    const response = await axios.get(baseUrl, {
      params: options,
    });
    return response.data;
  }
};
