interface Params {
  [key: string]: string;
}

export const setSearchParams = (url: string, params: Params) => {
  const fetchUrl = new URL(url);
  fetchUrl.search = new URLSearchParams(params).toString();

  return fetchUrl;
};
