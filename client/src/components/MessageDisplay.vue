<script>
import { loadMessageIfNotLoaded } from "../js/message";

export default {
  name: "MessageDisplay",
  mounted() {
    loadMessageIfNotLoaded();
  },
};
</script>

<template>
  <div>
    <h1>{{ $store.state.message }}</h1>
  </div>
</template>
