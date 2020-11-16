export default (methodAndUrl, ajaxConfig) => {
  const [method, urlStr] = methodAndUrl.split(" ");
  const urlObj = new URL(urlStr);
  const params = new URLSearchParams(urlObj.search);
  const fetchConfig = Object.assign({ method }, ajaxConfig);
  if (fetchConfig.params) {
    Object.keys(ajaxConfig.params).forEach((key) => {
      params.set(key, ajaxConfig.params[key]);
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
