<script setup lang="js"></script>

<template>
  <TopBar />
  <div class="flex gap-12 px-12 m-auto max-w-custom">
    <Navigation />
    <div class="w-full p-8 border rounded-3xl">
      <slot />
    </div>
  </div>
</template>
<style scoped></style>
