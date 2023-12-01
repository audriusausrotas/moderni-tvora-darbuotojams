<script setup lang="js">
const {name, label} = defineProps(["name", "label"])
</script>

<template>
  <div class="flex items-center">
    <input type="checkbox" :id="name" class="hidden" />
    <label
      :for="name"
      class="p-2 text-gray-700 transition-all bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400"
    >
      {{ label }}
    </label>
  </div>
</template>
<style scoped></style>
