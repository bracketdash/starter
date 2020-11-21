const getUrl(url, params) {
  if (!params) {
      return url;
  }
  const urlObj = new URL(url);
  const search = new URLSearchParams(urlObj.search);
  Object.keys(params).forEach((key) => params.set(key, params[key]));
  urlObj.search = search.toString();
  return urlObj.toString();
}

const getFetch = (method, url, settings) => {
  const config = Object.assign({ method }, settings);
  if (settings.data) {
    config.body = JSON.stringify(settings.data);
  }
  return fetch(getUrl(url, settings.params), config);
};

export default {
  get: (url, config) => getFetch("GET", url, config),
  post: (url, config) => getFetch("POST", url, config),
  put: (url, config) => getFetch("PUT", url, config),
  delete: (url, config) => getFetch("DELETE", url, config),
};
