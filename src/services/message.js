import ajax from "./ajax";
import sharedState from "./sharedState";

const status = {
  loadMessageIfNotLoaded: "unrun",
};

export const loadMessageIfNotLoaded = async () => {
  if (["fetching", "loaded"].indexOf(status.loadMessageIfNotLoaded) === -1) {
    status.loadMessageIfNotLoaded = "fetching";
    const response = await ajax("GET /api/message");
    if (response.ok) {
      const data = await response.json();
      sharedState.message = data.message;
      status.loadMessageIfNotLoaded = "loaded";
    } else {
      sharedState.message = "Offline Message";
      status.loadMessageIfNotLoaded = "offline";
    }
  }
  return;
};
