<script setup lang="js">
import { useProjectStore } from '~/store/project';

const { index } = defineProps(["index"]);

const useProject= useProjectStore()
</script>

<template>
  <div class="flex gap-4">
    <BaseButton name="prideti nauja" @click="useProject.addMeasure(index)" />
    <BaseButton name="nukopijuoti paskutini" />
    <BaseButton
      name="išvalyti visus"
      @click="useProject.deleteMeasures(index)"
    />
  </div>
  <div class="flex flex-col gap-1">
    <div
      v-if="useProject.fences[index].measures.length > 0"
      class="grid justify-between custom-grid"
    >
      <p class="m-auto">Nr</p>
      <p class="m-auto">ilgis</p>
      <p class="m-auto">aukštis</p>
      <p class="m-auto">tarpas</p>
      <p class="m-auto">vartai</p>
      <p class="m-auto">dvipuse</p>
      <p class="m-auto">veiksmai</p>
    </div>
    <div
      v-for="(measure, measureIndex) in useProject.fences[index].measures"
      class="grid justify-between custom-grid"
    >
      <p class="m-auto">{{ measureIndex + 1 }}</p>

      <BaseInput
        width="20"
        class="m-auto"
        type="number"
        :name="useProject.fences[index].measures[measureIndex].length"
        @onChange="
          (value) =>
            useProject.updateMeasureLength({ index, value, measureIndex })
        "
      />

      <BaseInput
        width="20"
        class="m-auto"
        type="number"
        :name="useProject.fences[index].measures[measureIndex].height"
        @onChange="
          (value) =>
            useProject.updateMeasureHeight({ index, value, measureIndex })
        "
      />

      <BaseInput
        width="20"
        class="m-auto"
        type="number"
        :name="useProject.fences[index].measures[measureIndex].space"
        @onChange="
          (value) =>
            useProject.updateMeasureSpace({ index, value, measureIndex })
        "
      />

      <BaseCheckField
        class="m-auto"
        @onChange="
          (value) =>
            useProject.updateMeasureGate({ index, value, measureIndex })
        "
      />

      <BaseCheckField
        class="m-auto"
        @onChange="
          (value) =>
            useProject.updateMeasureTwoSided({ index, value, measureIndex })
        "
      />

      <div
        @click="console.log(useProject.fences[index])"
        class="flex items-center justify-center gap-2 px-2 py-1 border rounded-md hover:cursor-pointer"
      >
        <NuxtImg src="/icons/delete.svg" width="20" />
        delete
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-grid {
  grid-template-columns:
    50px minmax(100px, 250px) minmax(100px, 250px) minmax(100px, 250px)
    60px 60px 100px;
  align-items: center;
}
</style>
