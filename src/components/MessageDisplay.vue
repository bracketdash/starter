<template>
    <div class="message-display">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    computed: {
        message() {
            return this.$store.getters.message;
        },
    },
};
</script>
