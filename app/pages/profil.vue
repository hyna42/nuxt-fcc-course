<script setup lang="ts">
// definePageMeta({
//   layout: "custom",
// });
////SEO/////
useHead({
  title: "Profil",
  meta: [
    {
      name: "description",
      content:
        "page where you are going to find everything about this course of Nuxt.",
    },
  ],
  bodyAttrs: { class: "test" },
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
  <div>
    <p class="text-3xl font-bold underline text-blue-400">Profil Page</p>
    <!-- <Alert/> -->
  </div>
</template>
