<script setup lang="js">
import calculateResults from '~/utils/calculateResults';
const results = useResultsStore();

// calculateResults()
</script>

<template>
  <table class="w-full">
    <thead class="overflow-hidden font-semibold capitalize bg-gray-ultra-light">
      <tr>
        <th class="w-8 p-3 rounded-tl-2xl">Nr</th>
        <th class="min-w-[400px]">Pavadinimas</th>
        <th class="w-20 p-3">Spalva</th>
        <th class="w-20 p-3">Tarpas</th>
        <th class="w-20 p-3">Kiekis</th>
        <th class="w-20 p-3">Kaina</th>
        <th class="w-20 p-3">viso</th>
        <th class="w-20 p-3">Savikaina</th>
        <th class="w-20 p-3">s.viso</th>
        <th class="w-20 p-3">pelnas</th>
        <th class="w-20 p-3">marža</th>
        <th class="w-8 p-3 rounded-tr-2xl"></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(result, index) in results.results"
        :key="result.id"
        class="items-center border-b"
      >
        <ResultFenceElement :result="result" :index="index" />
      </tr>
      <tr>
        <ResultTotalElement results="results" />
      </tr>
    </tbody>
  </table>
</template>
<style scoped></style>
