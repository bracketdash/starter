<script>
import ChangeMessage from "./ChangeMessage.vue";

export default {
  name: "About",
  components: { ChangeMessage },
};
</script>

<template>
  <div>
    <div>
      <i className="fas fa-info-circle fa-3x"></i>
    </div>
    <h1>This is the about page.</h1>
    <ChangeMessage />
  </div>
</template>
