<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <MessageDisplay />
    </div>
</template>

<script>
import MessageDisplay from "./MessageDisplay.vue";

export default {
    name: "Home",
    components: {
        MessageDisplay,
    },
};
</script>

<style scoped>
</style>
