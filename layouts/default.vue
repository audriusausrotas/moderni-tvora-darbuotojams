<script setup lang="js"></script>

<template>
  <TopBar />
  <div class="flex gap-8 px-12 py-10 m-auto max-w-custom">
    <Navigation />
    <div class="w-full px-8 py-12 border rounded-3xl">
      <slot />
    </div>
  </div>
</template>
<style scoped></style>
