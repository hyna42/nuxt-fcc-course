<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    console.log("tc:", titleChunk);
    return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
