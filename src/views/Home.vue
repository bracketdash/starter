<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <MessageDisplay />
    </div>
</template>

<script>
import MessageDisplay from "../components/MessageDisplay.vue";

export default {
    components: {
        MessageDisplay,
    },
};
</script>
