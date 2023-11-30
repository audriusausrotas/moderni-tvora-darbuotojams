<script setup>
defineProps(["message", "isError"]);
</script>

<template>
  <div :class="['capitalize', isError ? 'text-red-full' : 'text-green-500']">
    {{ message }}
  </div>
</template>

<style scoped></style>
