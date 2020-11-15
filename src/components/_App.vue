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
  padding: 30px;
  & a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
