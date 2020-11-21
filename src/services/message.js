import ajax from "./ajax";
import c from "./constants";
import store from "./store";

const status = {
  loadMessageIfNotLoaded: "unrun",
};

export const loadMessageIfNotLoaded = async () => {
  if (["fetching", "loaded"].indexOf(status.loadMessageIfNotLoaded) === -1) {
    status.loadMessageIfNotLoaded = "fetching";
    const response = await ajax("GET /api/message");
    if (response.ok) {
      const data = await response.json();
      store.commit("setMessage", data.message);
      status.loadMessageIfNotLoaded = "loaded";
    } else if (store.state.message === c.INITIAL_MESSAGE) {
      store.commit("setMessage", c.OFFLINE_MESSAGE);
      status.loadMessageIfNotLoaded = "offline";
    }
  }
  return;
};
