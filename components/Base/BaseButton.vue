<script setup lang="js">
defineProps(["name"]);
</script>

<template>
  <button
    class="p-2 capitalize transition-colors border border-gray-400 rounded-md shadow-md w-60 transi hover:bg-red-500 hover:text-white"
  >
    {{ name }}
  </button>
</template>
<style scoped></style>
