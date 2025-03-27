const getApiBaseUrl = (): string => {
  const isDevelopment = process.env.NODE_ENV === "development";
  return isDevelopment
    ? "http://127.0.0.1:8000"
    : "https://python-functions.onrender.com";
};

export default getApiBaseUrl;
