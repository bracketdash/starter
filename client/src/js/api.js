import ajax from "./ajax";

let BASE_URL = "/api";

let reassigningBaseUrl = false;

const reassignBaseUrlIfDevServerUp = async () => {
  const DEV_SERVER = "http://localhost:3001";
  reassigningBaseUrl = true;
  try {
    const response = await ajax.get(DEV_SERVER + "/test");
    if (response.ok) {
      BASE_URL = DEV_SERVER + BASE_URL;
      console.log("Reassigned base URL");
    }
  } catch (e) {
    console.warn("Dev Server not running. Using production API server.");
  }
  reassigningBaseUrl = false;
};

const waitForBaseUrlAssignment = () => new Promise((resolve) => {
  const loop = () => {
    if (reassigningBaseUrl) {
      setTimeout(loop, 100);
      return;
    }
    resolve();
  };
  loop();
});

if (window.location.hostname === "localhost") {
  reassignBaseUrlIfDevServerUp();
}

export default {
  getMessage: async () => {
    console.log("getMessage");
    if (reassigningBaseUrl) {
      await waitForBaseUrlAssignment();
    }
    const response = await ajax.get(BASE_URL + "/message");
    if (!response.ok) {
      return false;
    }
    const data = await response.json();
    return data.message;
  },
};
