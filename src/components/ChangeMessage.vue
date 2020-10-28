<template>
    <div>
        <p>Edit the home page message here:</p>
        <input :value="message" @input="setMessage" />
    </div>
</template>

<script>
export default {
    name: "ChangeMessage",
    computed: {
        message() {
            return this.$store.state.message;
        },
    },
    methods: {
        setMessage(e) {
            this.$store.commit("setMessage", e.target.value);
        },
    },
};
</script>
