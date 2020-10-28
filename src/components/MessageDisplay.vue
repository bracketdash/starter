<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "MessageDisplay",
    computed: {
        ...mapState(["message"]),
    },
};
</script>
