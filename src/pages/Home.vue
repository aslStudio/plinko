<template lang="pug">
the-canvas
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TheCanvas } from "@/widgets";

export default defineComponent({
  name: "HomePage",
  components: {
    "the-canvas": TheCanvas,
  },
});
</script>
