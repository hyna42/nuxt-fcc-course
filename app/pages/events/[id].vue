<script setup lang="ts">
const nuxt = useNuxtApp();
console.log("::", nuxt);
</script>
<template>
  <div>
    <p class="text-3xl font-bold underline text-red-400">
      Events-id: {{ $route.params.id }}
    </p>
  </div>
</template>
