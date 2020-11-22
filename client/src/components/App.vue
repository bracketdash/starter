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

<style scoped>
#nav {
  padding: 1.8em;
  & a {
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    &.router-link-exact-active {
      color: var(--color-active-nav);
    }
  }
}
</style>
