<template>
    <div>
        <p>Edit the home page message here:</p>
        <input :value="message" @input="updateMessage" />
    </div>
</template>

<script>
export default {
    name: "ChangeMessage",
    computed: {
        message() {
            return this.$store.getters.message;
        },
    },
    methods: {
        updateMessage(e) {
            this.$store.commit('updateMessage', e.target.value);
        }
    },
};
</script>

<style scoped>
</style>
