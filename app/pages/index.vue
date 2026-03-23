<script setup lang="ts">
const { sayHello } = useUtils();
</script>

<template>
  <div>
    <p class="text-3xl font-bold underline text-blue-400">Home</p>
    <!-- <Alert/> -->
    {{ console.log(":test:", sayHello()) }}
    <IconsBell />
  </div>
</template>
