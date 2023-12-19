<script setup lang="js">
import { useProjectStore } from '~/store/project';

const client = useProjectStore().client;

</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-wrap overflow-hidden border rounded-lg">
      <div class="flex-1">
        <ResultClient name="klientas" :value="client.username" class="capitalize border-b" />
        <ResultClient name="telefono numeris" :value="client.phone" />
      </div>
      <div class="flex-1">
        <ResultClient name="adresas" :value="client.address" class="capitalize border-b" />
        <ResultClient name="elektroninis paštas" :value="client.email" />
      </div>
    </div>

    <div class="flex gap-8">
      <BaseButton name="išsaugoti" />
      <BaseButton name="kopijuoti nuorodą" />
    </div>

    <div class="my-4 border-b" />



  </div>
</template>

