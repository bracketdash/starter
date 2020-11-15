<script>
import sharedState from "../services/sharedState";

export default {
  name: "MessageDisplay",
  setup() {
    return { sharedState };
  },
};
</script>

<template>
  <div>
    <h1>{{ sharedState.message }}</h1>
  </div>
</template>
