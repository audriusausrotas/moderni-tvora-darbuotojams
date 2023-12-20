<script setup>
import { useProjectStore } from '~/store/project';

const useProject = useProjectStore()

</script>

<template>
  <div class="flex flex-col gap-8">
    <ResultClientDetails />
    <ResultFence />
  </div>
</template>

