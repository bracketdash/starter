const getUrl = (url, params) => {
  if (!params) {
    return url;
  }
  const urlObj = new URL(url);
  const search = new URLSearchParams(urlObj.search);
  Object.keys(params).forEach((key) => params.set(key, params[key]));
  urlObj.search = search.toString();
  return urlObj.toString();
};

const getFetch = (method, url, settings) => {
  const config = Object.assign({ method }, settings);
  const data = settings ? settings.data : false;
  const params = settings ? settings.params : false;
  if (data) {
    config.body = JSON.stringify(data);
  }
  return fetch(getUrl(url, params), config);
};

const methods = {};
["get", "post", "put", "delete"].forEach((method) => {
  methods[method] = (url, settings) => getFetch(method.toUpperCase(), url, settings);
});

export default methods;
