<script setup lang="js">
defineProps(["name", "width", "type"]);
</script>

<template>
  <button
    class="flex items-center justify-center gap-2 px-4 py-2 capitalize transition-colors rounded-lg shadow-sm"
    :class="[
      width ? 'w-' + width : 'w-60',
      type === 'special'
        ? 'text-black  hover:bg-red-full hover:text-white border border-inputBorder'
        : 'text-white bg-dark-full hover:bg-red-full hover:text-white',
    ]"
  >
    <slot />
    {{ name }}
  </button>
</template>
<style scoped></style>
