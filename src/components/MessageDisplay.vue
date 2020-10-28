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
            return this.$store.state.message;
        },
    },
};
</script>
