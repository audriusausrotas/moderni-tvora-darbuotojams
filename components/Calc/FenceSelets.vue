<script setup lang="js">

const { index } = defineProps(["index"]);
const useProject = useProjectStore();
const fenceSide = ["priekis", "galas", "kairė", "dešinė"];

const fenceTypes = useProject.fenceTypes;
const fenceMaterial = useProject.fenceMaterials;
const fenceColors = useProject.fenceColors;
const currentFence = useProject.fences[index]
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 xl:justify-normal">
    <BaseSelectField
      label="Tvoros pusė"
      :values="fenceSide"
      id="fenceSide"
      :defaultValue="currentFence.side"
      width="w-56"
      @onChange="(value) => useProject.updateSide({ index, value })"
    />
    <BaseSelectField
      label="Tvoros tipas"
      :values="fenceTypes"
      id="fenceType"
      :defaultValue="currentFence.type"
      width="w-56"
      @onChange="(value) => useProject.updateType({ index, value })"
    />
    <BaseSelectField
      label="Tvoros spalva"
      :values="fenceColors"
      id="fenceColor"
      :defaultValue="currentFence.color"
      width="w-56"
      @onChange="(value) => useProject.updateColor({ index, value })"
    />
    <BaseSelectField
      label="Skardos Tipas"
      :values="fenceMaterial"
      id="fenceMaterial"
      :defaultValue="currentFence.material"
      width="w-56"
      @onChange="(value) => useProject.updateMaterial({ index, value })"
    />
    <BaseInput
      placeholder="Tarpas Tarp Elementų"
      type="number"
      variant="light"
      label="tarpas tarp elementų"
      width="w-56"
      :name="currentFence.space"
      @onChange="
        (value) => useProject.updateMeasureSpace({ index, value, measureIndex })
      "
    />
  </div>
</template>
<style scoped></style>
