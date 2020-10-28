<template>
    <div>
        <p>Edit the home page message here:</p>
        <input :value="message" @input="setMessage" />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "ChangeMessage",
    computed: {
        ...mapState(["message"]),
    },
    methods: {
        setMessage(e) {
            this.$store.commit("setMessage", e.target.value);
        },
    },
};
</script>
