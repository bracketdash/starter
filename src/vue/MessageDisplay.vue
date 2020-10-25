<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: "MessageDisplay",
    computed: {
        message() {
            return this.$store.getters.message;
        },
    },
};
</script>

<style scoped>
</style>
