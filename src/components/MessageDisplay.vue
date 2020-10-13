<template>
    <div class="message-display">
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        message() {
            return this.$store.getters.message;
        },
    },
};
</script>
