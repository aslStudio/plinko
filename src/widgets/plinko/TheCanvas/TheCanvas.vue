<template lang="pug">
canvas(
    :id="id"
)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { consts } from '../lib'

export default defineComponent({
    name: 'TheCanvas'
    setup() {
        return {
            id: consts.CANVAS_ID
        }
    }
})
</script>