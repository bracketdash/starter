<template>
    <div>
        <h1>This is the about page.</h1>
        <ChangeMessage />
    </div>
</template>

<script>
import ChangeMessage from "./ChangeMessage.vue";

export default {
    name: "About",
    components: {
        ChangeMessage,
    },
};
</script>
