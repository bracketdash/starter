<template>
    <div class="about">
        <h1>This is the about page.</h1>
        <ChangeMessage />
    </div>
</template>

<script>
import ChangeMessage from "../components/ChangeMessage.vue";

export default {
    name: "About",
    components: {
        ChangeMessage,
    },
};
</script>
