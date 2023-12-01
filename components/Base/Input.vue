<script setup lang="js">
const {placeholder, label, type, name, width} = defineProps(["placeholder", "label", "type", "name", "width"]);

const emit = defineEmits(["onChange"]);

const emitUpdate = (value) => {
  emit("onChange", value)
  };
</script>
"

<template>
  <div class="flex flex-col gap-2 capitalize">
    <label :for="label" class="pl-2 text-sm">{{ label }}</label>

    <div
      class="flex items-center justify-center gap-3 px-4 py-2 overflow-hidden border rounded-lg shadow-sm bg-gray-ultra-light border-dark-ultra-light"
      :class="width ? `w-${width}` : 'w-60'"
    >
      <slot />
      <input
        :value="name"
        :placeholder="placeholder"
        :id="label"
        :type="type"
        @input="emitUpdate($event.target.value)"
        class="w-full h-full outline-none bg-inherit"
      />
    </div>
  </div>
</template>
<style scoped></style>
