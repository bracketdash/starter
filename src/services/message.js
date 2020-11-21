import { INITIAL_MESSAGE, OFFLINE_MESSAGE } from "./constants";
import ajax from "./ajax";
import store from "./store";

const [ UNRUN, FETCHING, LOADED, OFFLINE ] = Array(4).fill(null).map(() => Symbol());

const status = {
  loadMessageIfNotLoaded: UNRUN,
};

export const loadMessageIfNotLoaded = async () => {
  if (![ FETCHING, LOADED ].includes(status.loadMessageIfNotLoaded)) {
    status.loadMessageIfNotLoaded = FETCHING;
    const response = await ajax.get("/api/message");
    if (response.ok) {
      const data = await response.json();
      store.commit("setMessage", data.message);
      status.loadMessageIfNotLoaded = LOADED;
      return;
    }
    if (store.state.message === INITIAL_MESSAGE) {
      store.commit("setMessage", OFFLINE_MESSAGE);
    }
    status.loadMessageIfNotLoaded = OFFLINE;
  }
  return;
};
