<script setup>
import { useResultsStore } from "~/store/results";

defineProps([]);

const useResults = useResultsStore();

const deleteHandler = () => {
    useResults.calculateResults();
};
</script>
 
<template>
    <tr>
        <td class="px-1 py-3">1</td>
        <td class="px-1 py-3">
            <BaseInput width="w-full" variant="light" placeholder="Pavadinimas" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" variant="light" name="100" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" variant="light" name="1.5" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" name="150" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" name="1" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" name="100" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" name="50" />
        </td>
        <td class="px-1 py-3">
            <BaseInput width="w-24" name="30" />
        </td>
        <td class="py-3">
            <NuxtImg src="/icons/delete.svg" width="20" @click="deleteHandler" />
        </td>
    </tr>
</template>
<style scoped></style>