<script setup lang="js">
import { useProjectStore } from '~/store/project';
const { index } = defineProps(["index"]);
const useProject= useProjectStore()

const canBeDouble = [ "Alba", "Dija", "Sigma","Astra", "Polo","EVA", "EVA3",  "Estetic", "Emka", ]

const isDouble = useState('isDouble', ()=>canBeDouble.includes(useProject.fences[index].type))

const open = useState("open", ()=> false)

watch(() => useProject.fences[index].type, (newType) => {
  isDouble.value = canBeDouble.includes(newType);
});
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <BaseButton name="prideti nauja" @click="useProject.addMeasure(index)" />
    <BaseButton
      name="nukopijuoti paskutinį"
      @click="useProject.copyLast(index)"
    />
    <BaseButton name="išskaičiuoti pagal ilgį" @click="open = true" />
    <BaseButton
      name="išvalyti visus"
      @click="useProject.deleteMeasures(index)"
    />
    <BaseButton name="įterpti kampą" @click="useProject.addKampas(index)" />
    <BaseButton name="įterpti laiptą" @click="useProject.addLaiptas(index)" />
  </div>
  <div class="flex flex-col gap-1">
    <div
      v-if="useProject.fences[index].measures.length > 0"
      class="grid gap-2 custom-grid"
    >
      <p class="m-auto">Nr</p>
      <p class="m-auto">ilgis</p>
      <p class="m-auto">aukštis</p>
      <p class="m-auto">vartai</p>
      <p v-if="isDouble" class="m-auto">dvipuse</p>
      <p class="m-auto">veiksmai</p>
    </div>
    <div v-for="(measure, measureIndex) in useProject.fences[index].measures">
      <div
        v-if="!measure.kampas.exist && !measure.laiptas.exist"
        class="grid items-center gap-2 custom-grid"
      >
        <p class="m-auto">{{ measureIndex + 1 }}</p>

        <BaseInput
          width="w-24"
          placeholder="Ilgis"
          type="number"
          :name="measure.length"
          @onChange="
            (value) =>
              useProject.updateMeasureLength({ index, value, measureIndex })
          "
        />
        <BaseInput
          width="w-24"
          placeholder="Aukštis"
          type="number"
          :name="measure.height"
          @onChange="
            (value) =>
              useProject.updateMeasureHeight({ index, value, measureIndex })
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
          v-if="isDouble"
          class="m-auto"
          @onChange="
            (value) =>
              useProject.updateMeasureTwoSided({ index, value, measureIndex })
          "
        />

        <div
          @click="useProject.deleteMeasure({ index, measureIndex })"
          class="flex items-center justify-center gap-2 px-2 py-1 border rounded-md hover:cursor-pointer"
        >
          <NuxtImg src="/icons/delete.svg" width="20" />
          delete
        </div>
      </div>
      <div
        v-else-if="measure.kampas.exist"
        class="grid items-center gap-2 custom-grid"
      >
        <p class="m-auto">{{ measureIndex + 1 }}</p>

        <p>Kampas</p>

        <BaseInput
          width="w-24"
          placeholder="Laipsnis"
          type="number"
          :name="measure.kampas.value"
          @onChange="
            (value) =>
              useProject.updateMeasureKampas({ index, value, measureIndex })
          "
        />
        <div v-if="isDouble"></div>
        <div></div>
        <div
          @click="useProject.deleteMeasure({ index, measureIndex })"
          class="flex items-center justify-center gap-2 px-2 py-1 border rounded-md hover:cursor-pointer"
        >
          <NuxtImg src="/icons/delete.svg" width="20" />
          delete
        </div>
      </div>
      <div
        v-else-if="measure.laiptas.exist"
        class="grid items-center gap-2 custom-grid"
      >
        <p class="m-auto">{{ measureIndex + 1 }}</p>
        <p>Laiptas</p>

        <BaseInput
          width="w-24"
          placeholder="Aukštis"
          type="number"
          :name="measure.laiptas.value"
          @onChange="
            (value) =>
              useProject.updateMeasureLaiptas({ index, value, measureIndex })
          "
        />
        <div v-if="isDouble"></div>
        <div></div>
        <div
          @click="useProject.deleteMeasure({ index, measureIndex })"
          class="flex items-center justify-center gap-2 px-2 py-1 border rounded-md hover:cursor-pointer"
        >
          <NuxtImg src="/icons/delete.svg" width="20" />
          delete
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <div class="absolute top-0 left-0 w-screen h-sreen bg-slate-100">asdf</div>
  </Teleport>
</template>
<style scoped>
.custom-grid {
  grid-template-columns: 50px 100px 100px 90px 90px 90px;
}
</style>
