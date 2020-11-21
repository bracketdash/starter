const ajaxFn = (method, incomingUrl, ajaxConfig) => {
  const urlStr = incomingUrl.startsWith("http") ? incomingUrl : window.location.origin + incomingUrl;
  const urlObj = new URL(urlStr);
  const params = new URLSearchParams(urlObj.search);
  const fetchConfig = Object.assign({ method }, ajaxConfig);
  if (fetchConfig.params) {
    Object.keys(fetchConfig.params).forEach((key) => {
      params.set(key, fetchConfig.params[key]);
    });
    urlObj.search = params.toString();
    delete fetchConfig.params;
  }
  if (fetchConfig.data) {
    fetchConfig.body = JSON.stringify(ajaxConfig.data);
    delete fetchConfig.data;
  }
  return fetch(urlObj.toString(), fetchConfig);
};

export default {
  get: (url, config) => ajaxFn("GET", url, config),
  post: (url, config) => ajaxFn("POST", url, config),
  put: (url, config) => ajaxFn("PUT", url, config),
  delete: (url, config) => ajaxFn("DELETE", url, config),
};
