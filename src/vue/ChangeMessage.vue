<script>
import { reactive, watch } from "vue";

import { loadMessageIfNotLoaded } from "../services/message";
import store from "../services/store";

export default {
  name: "ChangeMessage",
  setup() {
    loadMessageIfNotLoaded();
    const localState = reactive({
      message: store.state.message,
    });
    watch(
      () => store.state.message,
      (newVal, oldVal) => {
        if (oldVal === localState.message) {
          localState.message = newVal;
        }
      }
    );
    const setLocalMessage = (e) => {
      localState.message = e.target.value;
    };
    const setSharedMessage = () => {
      store.commit("setMessage", localState.message);
    };
    return { localState, setLocalMessage, setSharedMessage };
  },
};
</script>

<template>
  <div>
    <p>Edit the home page message here:</p>
    <input class="mt-5 border border-solid border-gray-600 py-2 px-4 rounded text-center" :defaultValue="$store.state.message" @input="setLocalMessage" />
    <div class="pt-5">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="setSharedMessage">
        Change "{{ $store.state.message }}" to "{{ localState.message }}"
      </button>
    </div>
  </div>
</template>
