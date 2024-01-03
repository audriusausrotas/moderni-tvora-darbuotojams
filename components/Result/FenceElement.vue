<script setup>
import { useResultsStore } from "~/store/results";

const { result, index } = defineProps(["result", "index"]);

const useResults = useResultsStore();

const deleteHandler = () => {
    useResults.deleteResult(result.id);
};
</script>
 
<template>
    <tr>
        <td class="px-1 py-3">{{ index + 1 }}</td>
        <td class="px-1 py-3">
            <BaseInput width="w-full" variant="light" placeholder="Pavadinimas" :name="result.name" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" variant="light" :name="result.quantity" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" variant="light" :name="result.price" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" :name="result.totalPrice" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" :name="result.cost" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" :name="result.totalCost" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" :name="result.profit" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" :name="result.margin" />
        </td>
        <td class="py-3">
            <NuxtImg src="/icons/delete.svg" width="20" @click="deleteHandler" />
        </td>
    </tr>
</template>
<style scoped></style>