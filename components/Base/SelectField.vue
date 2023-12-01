<script setup>
const { values, defaultValue, id, name, label, width } = defineProps([
  "values",
  "defaultValue",
  "id",
  "name",
  "label",
  "width",
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
  <div class="flex flex-col gap-2 capitalize">
    <label :for="label" class="pl-2 text-sm">{{ label }}</label>
    <div class="relative selct-none" :class="width ? `w-${width}` : 'w-48'">
      <div
        @click="isOpen = !isOpen"
        class="flex justify-between gap-3 py-2 pl-4 border cursor-pointer border-gray-light bg-gray-ultra-light rounded-2xl"
      >
        <div class="flex gap-3 capitalize">
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
        class="absolute left-0 z-50 flex flex-col w-48 overflow-hidden border rounded-xl top-10 border-gray-light bg-gray-ultra-light"
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
  </div>
</template>
<style scoped></style>
