<script setup lang="js">
import { useProjectStore } from "~/store/project";
const { index } = defineProps(["index"]);
const useProject = useProjectStore();
const fenceSide = ["priekis", "galas", "kairė", "dešinė"];

const fenceTypes = useProject.fenceTypes;
const fenceMaterial = useProject.fenceMaterials;
const fenceColors = useProject.fenceColors

</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 xl:justify-normal">
    <BaseSelectField label="Tvoros pusė" :values="fenceSide" id="fenceSide" :defaultValue="fenceSide[0]" width="w-56"
      @onChange="(value) => useProject.updateSide({ index, value })" />
    <BaseSelectField label="Tvoros tipas" :values="fenceTypes" id="fenceType" :defaultValue="fenceTypes[0]" width="w-56"
      @onChange="(value) => useProject.updateType({ index, value })" />
    <BaseSelectField label="Tvoros spalva" :values="fenceColors" id="fenceColor" :defaultValue="fenceColors[0]"
      width="w-56" @onChange="(value) => useProject.updateColor({ index, value })" />
    <BaseSelectField label="Skardos Tipas" :values="fenceMaterial" id="fenceMaterial" :defaultValue="fenceMaterial[0]"
      width="w-56" @onChange="(value) => useProject.updateMaterial({ index, value })" />
    <BaseInput placeholder="Tarpas Tarp Elementų" type="number" variant="light" label="tarpas tarp elementų" width="w-56"
      :name="useProject.fences[index].space" @onChange="(value) => useProject.updateMeasureSpace({ index, value, measureIndex })
        " />
  </div>
</template>
<style scoped></style>
