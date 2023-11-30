<script setup>
const { values, defaultValue, id, name } = defineProps([
  "values",
  "defaultValue",
  "id",
  "name",
]);
const emit = defineEmits(["onChange"]);

const isOpen = ref(false);
const selectedValue = ref(defaultValue);

const changeHandler = (value) => {
  selectedValue.value = value;
  emit("onChange", selectedValue.value);
  isOpen.value = false;
};
</script>

<template>
  <div class="relative w-52 selct-none">
    <div
      @click="isOpen = !isOpen"
      class="flex justify-between gap-3 px-4 py-2 border cursor-pointer border-gray-light bg-gray-ultra-light rounded-2xl"
    >
      <div class="flex gap-3">
        <NuxtImg
          v-if="name === 'verified'"
          :src="
            selectedValue === 'patvirtintas'
              ? '/icons/ellipseg.svg'
              : '/icons/ellipser.svg'
          "
          width="8"
        />
        {{ selectedValue }}
      </div>
      <NuxtImg src="/icons/doubleArrow.svg" width="20" />
    </div>
    <div
      v-if="isOpen"
      class="absolute left-0 z-50 flex flex-col overflow-hidden border rounded-xl top-10 border-gray-light bg-gray-ultra-light w-52"
    >
      <div
        v-for="(value, index) in values"
        :key="index"
        @click="changeHandler(value)"
        class="px-4 py-2 hover:bg-red-full hover:cursor-pointer hover:text-white"
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>
<style scoped></style>
