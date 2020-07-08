import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

// BR
export const news = axios.create({
  baseURL: "https://newsapi.org/v2",
});

// US
export const google = axios.create({
  baseURL:
    "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=3f03e096e3aa46d9bfcca671b64d84c6",
});

export const hub = axios.create({
  baseURL: "https://api.github.com/orgs",
});

export default api;

/**
 * CAN SEARCH FOR:
    Keyword or phrase. Eg: find all articles containing the word 'Microsoft'.
    Date published. Eg: find all articles published yesterday.
    Source name. Eg: find all articles by 'TechCrunch'.
    Source domain name. Eg: find all articles published on thenextweb.com.
    Language. Eg: find all articles written in English.

    Via the apiKey querystring parameter.
Via the X-Api-Key HTTP header.
Via the Authorization HTTP header.
 */
