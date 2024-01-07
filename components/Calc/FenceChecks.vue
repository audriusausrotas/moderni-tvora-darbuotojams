<script setup lang="js">
import { verticals } from '~/data/selectFieldData';
const { index } = defineProps(['index']);
const useProject = useProjectStore();

const isDouble = useState("isDouble", () =>
  verticals.includes(useProject.fences[index].type)
);

watch(
  () => useProject.fences[index].type,
  (newType) => {
    isDouble.value = verticals.includes(newType);
  },
  { deep: true }
);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 xl:justify-normal">
    <BaseCheckField
      v-if="isDouble"
      label="Dvipusė"
      @onChange="(value) => useProject.updateMeasureTwoSided({ index, value })"
    />

    <BaseCheckField
      label="montavimas"
      name="montavimas"
      :checked="useProject.fences[index].montavimas"
      :onChange="
        (e) => useProject.updateMontavimas({ value: e.target.checked, index })
      "
    />

    <BaseCheckField
      label="borteliai"
      name="borteliai"
      :checked="useProject.fences[index].borteliai"
      :onChange="
        (e) => useProject.updateBorteliai({ value: e.target.checked, index })
      "
    />

    <BaseCheckField
      label="stulpai"
      name="stulpai"
      :checked="useProject.fences[index].stulpai"
      :onChange="
        (e) => useProject.updateStulpai({ value: e.target.checked, index })
      "
    />

    <BaseCheckField
      label="tik montavimas"
      name="tik montavimas"
      :checked="useProject.fences[index].tikMontavimas"
      :onChange="
        (e) =>
          useProject.updateTikMontavimas({ value: e.target.checked, index })
      "
    />
  </div>
</template>
<style scoped></style>
