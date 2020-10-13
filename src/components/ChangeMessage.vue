<template>
    <div class="change-message">
        <p>Edit the home page message here:</p>
        <input :value="message" @input="updateMessage" />
    </div>
</template>

<script>
export default {
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
