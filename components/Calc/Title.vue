<script setup lang="js">
const emit = defineEmits(["onClick"])
const {name, open} = defineProps(["name","open"])
</script>

<template>
  <div
    class="flex gap-2 text-lg font-semibold select-none hover:cursor-pointer"
    @click="emit('onClick')"
  >
    <h6>{{ name }}</h6>
    <NuxtImg
      src="/icons/arrowDown.svg"
      width="8"
      :class="open ? 'rotate-180' : ''"
      class="transition-all"
    />
  </div>
</template>
<style scoped></style>
