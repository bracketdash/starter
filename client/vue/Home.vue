<script>
import ChangeMessage from "./ChangeMessage.vue";
import MessageDisplay from "./MessageDisplay.vue";

export default {
  name: "Home",
  components: { ChangeMessage, MessageDisplay },
};
</script>

<template>
  <div>
    <img class="inline" alt="Vue logo" src="../images/logo.png" />
    <MessageDisplay />
    <ChangeMessage />
  </div>
</template>
