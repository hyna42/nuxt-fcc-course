<script setup lang="ts">
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <div class="my-modal">
    <button @click="(e) => emit('click', e)">
      <slot name="label">Boutton</slot>
    </button>
    <main>
      <slot name="body"> </slot>
    </main>
  </div>
</template>
