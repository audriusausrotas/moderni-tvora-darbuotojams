<script setup lang="js">
defineProps(["name", "width", "type"]);
</script>

<template>
  <button
    class="flex items-center justify-center gap-2 px-2 py-1 capitalize transition-colors rounded-lg shadow-sm transi"
    :class="[
      width ? 'w-' + width : 'w-60',
      type === 'special'
        ? 'text-black  hover:bg-red-600 hover:text-white border border-inputBorder'
        : 'text-white bg-gray-600 hover:bg-red-600 hover:text-white',
    ]"
  >
    <slot />
    {{ name }}
  </button>
</template>
<style scoped></style>
