<script setup>
const { index } = defineProps(["index"]);
</script>

<template>
  <div class="flex flex-col gap-8">
    <CalcFenceSelets :index="index" />
    <CalcFenceChecks :index="index" class="pb-8 border-b" />
    <CalcFenceMeasures :index="index" />
  </div>
</template>
