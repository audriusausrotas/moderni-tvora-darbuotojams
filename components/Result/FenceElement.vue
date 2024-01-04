<script setup>
import { useResultsStore } from "~/store/results";

const { result, index } = defineProps(["result", "index"]);

const useResults = useResultsStore();

const deleteHandler = () => {
  useResults.deleteResult(result.id);
};

const updateName = () => {};
const updateColor = () => {};
const updateQuantity = () => {};
const updatePrice = () => {};
//  @onChange="(value) => useProject.updateClientUsername(value)"
</script>

<template>
  <tr>
    <td class="py-3 text-center">{{ index + 1 }}</td>
    <td class="px-1 py-3">
      <BaseInput
        width="w-full"
        variant="light"
        placeholder="Pavadinimas"
        :name="result.name"
      />
    </td>
    <td class="px-1 py-3">
      <BaseInput
        width="w-24"
        :variant="result.color === 'Kita' ? 'light' : ''"
        :disable="result.color === 'Kita' ? false : true"
        :name="result.color"
      />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.space" disable="true" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" variant="light" :name="result.quantity" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" variant="light" :name="result.price" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.totalPrice" disable="true" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.cost" disable="true" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.totalCost" disable="true" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.profit" disable="true" />
    </td>
    <td class="px-1 py-3">
      <BaseInput width="w-24" :name="result.margin + ' %'" disable="true" />
    </td>
    <td class="py-3">
      <NuxtImg src="/icons/delete.svg" width="20" @click="deleteHandler" />
    </td>
  </tr>
</template>
<style scoped></style>
