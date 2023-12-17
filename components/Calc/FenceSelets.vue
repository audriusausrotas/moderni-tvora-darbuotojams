<script setup lang="js">
import { useProjectStore } from "~/store/project";

const fenceTypes = ["Daimond 60/90", "Daimond 105/40", "Alba", "Plank", "žaliuzi", "eglė", "Dija", "standard", "sigma", "astra", "polo", "EVA", "EVA3", "estetic", "emka",];

const fenceColors = ["7016", "7024", "8019", "8017", "6020", "6005", "9005", "3009", "Kita"];

const fenceMaterial = ["Matinė", "Blizgi", "IceCrystal",];

const fenceSide = ["priekis", "galas", "kairė", "dešinė"];

const { index } = defineProps(["index"]);

const useProject = useProjectStore();
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
    <BaseInput placeholder="Tarpas Tarp Elementų" type="number" label="tarpas tarp elementų" width="w-56"
      :name="useProject.fences[index].space" @onChange="(value) => useProject.updateMeasureSpace({ index, value, measureIndex })
        " />
  </div>
</template>
<style scoped></style>
