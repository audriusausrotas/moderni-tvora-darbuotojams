<script setup>
import { useProjectStore } from "~/store/project";

const useProject = useProjectStore();
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
  <BaseButton name="išsaugoti" />
</template>
<style scoped></style>
