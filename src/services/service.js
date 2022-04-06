import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
});

export const searchVideos = async (query) => {
  const params = {
    part: "snippet",
    channelType: "channelTypeUnspecified",
    q: query,
    maxResults: 20,
    key: config.apiKey,
    regionCode: "BR",
  };

  const result = await api.get("search", { params });

  return result;
};

export const listVideos = async ({ chart, myRating, maxResults }) => {
  const params = {
    part: "snippet",
    chart,
    myRating,
    maxResults,
    regionCode: "BR",
    key: config.apiKey,
  };

  const result = await api.get("videos", { params });

  return result;
};
