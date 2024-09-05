<template lang="pug">
div
  div(
    :class="$style.root"
  )
    canvas(
      :id="sticksID"
    )
    canvas(
      :class="$style.bomb"
      :id="bombID"
    )
  button(
    @click="onPlay"
  ) PLAY
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { consts } from "../lib";
import { Plinko } from "@/widgets/plinko/model";

export default defineComponent({
  name: "TheCanvas",
  setup() {
    const plinko = new Plinko();

    function onPlay() {
      // requestAnimationFrame(onPlay)
      plinko.play();
    }

    onMounted(() => {
      plinko.init();
    });

    return {
      sticksID: consts.CANVAS_ID,
      bombID: consts.BOMB_CANVAS_ID,
      onPlay,
    };
  },
});
</script>

<style lang="scss" module>
.root {
  position: relative;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.bomb {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
