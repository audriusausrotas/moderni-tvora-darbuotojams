<script setup>
const useProject = useProjectStore();
const useResults = useResultsStore();
</script>

<template>
  <div class="flex flex-wrap overflow-hidden border rounded-lg">
    <div class="flex-1">
      <ResultClient
        name="klientas"
        :value="useProject.client.username"
        class="capitalize border-b"
      />
      <ResultClient name="telefono numeris" :value="useProject.client.phone" />
    </div>
    <div class="flex-1">
      <ResultClient
        name="adresas"
        :value="useProject.client.address"
        class="capitalize border-b"
      />
      <ResultClient
        name="elektroninis paštas"
        :value="useProject.client.email"
      />
    </div>
  </div>
  <div class="flex gap-4">
    <BaseButton name="pridėti naują detalę" @click="useResults.addNew" />
    <BaseButton
      name="išsaugoti sąmatą"
      @click="console.log(useResults.results)"
    />
  </div>
</template>
<style scoped></style>
