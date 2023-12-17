<script setup lang="js">
import { useProjectStore } from "~/store/project";

const useProject = useProjectStore();
const open = useState("clientOpen", () => true);
</script>

<template>
  <CalcTitle :open="open" name="Kliento Duomenys" @onClick="open = !open" />
  <div v-if="open" class="flex flex-col gap-8 mt-8 transition-all">
    <div class="flex justify-between">
      <BaseInput placeholder="Klientas" :active="true" label="Klientas" width="w-80" :name="useProject.client.username"
        @onChange="(value) => useProject.updateClientUsername(value)" />
      <BaseInput placeholder="Telefono Numeris" label="Telefono Numeris" type="number" width="w-80"
        :name="useProject.client.phone" @onChange="(value) => useProject.updateClientPhone(value)" />
      <BaseInput placeholder="Adresas" label="Adresas" width="w-80" :name="useProject.client.address"
        @onChange="(value) => useProject.updateClientAddress(value)" />
    </div>
    <div>
      <BaseInput placeholder="Elektroninis Paštas" label="Elektroninis Paštas" width="w-80"
        :name="useProject.client.email" @onChange="(value) => useProject.updateClientEmail(value)" />
    </div>
  </div>
</template>
<style scoped></style>
