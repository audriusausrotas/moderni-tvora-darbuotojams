<script setup lang="js">
const props = defineProps(["name"]);
</script>

<template>
  <p
    class="justify-center w-20 px-4 py-2 m-auto border rounded-lg shadow-sm border-dark-light bg-gray-ultra-light"
  >
    {{ props.name }}
  </p>
</template>
<style scoped></style>
