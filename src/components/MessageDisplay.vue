<script>
import { loadMessageIfNotLoaded } from "../services/message";
import sharedState from "../services/sharedState";

export default {
  name: "MessageDisplay",
  setup() {
    loadMessageIfNotLoaded();
    return { sharedState };
  },
};
</script>

<template>
  <div>
    <h1 class="text-3xl">{{ sharedState.message }}</h1>
  </div>
</template>
