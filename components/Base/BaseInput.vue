<script setup lang="js">
defineProps(["placeholder", "label", "type", "name"]);

const emit = defineEmits();

const emitUpdate = (value) => emit("update:name", value);
</script>
"

<template>
  <div class="flex flex-col capitalize">
    <label :for="label" class="pl-2 text-sm">{{ label }}</label>
    <input
      :value="name"
      :placeholder="placeholder"
      :id="label"
      :type="type"
      @input="emitUpdate($event.target.value)"
      class="px-4 py-2 border border-gray-400 rounded-md shadow-md w-60"
    />
  </div>
</template>
<style scoped></style>
