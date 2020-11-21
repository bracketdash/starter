<script>
import { loadMessageIfNotLoaded } from "../services/message";

export default {
  name: "MessageDisplay",
  mounted() {
    loadMessageIfNotLoaded();
  },
};
</script>

<template>
  <div>
    <h1 class="text-3xl">{{ $store.state.message }}</h1>
  </div>
</template>
