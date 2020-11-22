import { INITIAL_MESSAGE, OFFLINE_MESSAGE } from "./constants";
import api from "./api";
import store from "./store";

const [UNRUN, FETCHING, LOADED, OFFLINE] = Array(4)
  .fill(null)
  .map(() => Symbol());

const status = {
  loadMessageIfNotLoaded: UNRUN,
};

export const loadMessageIfNotLoaded = async () => {
  if (![FETCHING, LOADED].includes(status.loadMessageIfNotLoaded)) {
    status.loadMessageIfNotLoaded = FETCHING;
    const message = await api.getMessage();
    if (message) {
      store.commit("setMessage", message);
      status.loadMessageIfNotLoaded = LOADED;
      return;
    }
    if (store.state.message === INITIAL_MESSAGE) {
      store.commit("setMessage", OFFLINE_MESSAGE);
    }
    status.loadMessageIfNotLoaded = OFFLINE;
  }
};
