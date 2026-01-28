import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Strapi fetch failed:", res.status);
    return null;
  }

  return res.json();
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
