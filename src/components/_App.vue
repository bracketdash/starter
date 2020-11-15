<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: { RouterLink, RouterView },
};
</script>

<template>
  <div>
    <div id="nav"><RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink></div>
    <RouterView />
  </div>
</template>
