<script setup lang="js">
import  {useProjectStore}  from '~/store/project';

const { index } = defineProps(['index']);

const useProject = useProjectStore();
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 xl:justify-normal">
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
