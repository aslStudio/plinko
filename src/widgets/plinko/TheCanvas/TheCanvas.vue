<template lang="pug">
canvas(
    :id="id"
)
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { consts } from "../lib";
import { Plinko } from "@/widgets/plinko/model";

export default defineComponent({
  name: "TheCanvas",
  setup() {
    const plinko = new Plinko();

    onMounted(() => {
      plinko.init();
    });

    return {
      id: consts.CANVAS_ID,
    };
  },
});
</script>
