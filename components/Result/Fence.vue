<script setup lang='js'>
import { useProjectStore } from '~/store/project';

const useProject = useProjectStore();

useProject.generateResults()



</script>
 
<template>
    <div>
        <div class="grid p-4 font-semibold capitalize rounded-t-3xl custom-grid bg-gray-ultra-light">
            <p>Nr</p>
            <p>Pavadinimas</p>
            <p>Kiekis</p>
            <p>Kaina</p>
            <p>viso</p>
            <p>Savikaina</p>
            <p>savikaina viso</p>
            <p>pelnas</p>
            <p>marža</p>
            <p></p>
        </div>
        <div class="grid items-center p-4 border-b custom-grid">
            <p>1</p>
            <BaseInput width="w-full" variant="light">Pavadinimas</BaseInput>
            <BaseInput width="w-20" variant="light">100</BaseInput>
            <BaseInput width="w-20" variant="light">1.50</BaseInput>
            <BaseInfoField name="150" />
            <BaseInfoField name="1" />
            <BaseInfoField name="100" />
            <BaseInfoField name="50" />
            <BaseInfoField name="30" />
            <NuxtImg src="/icons/delete.svg" width="20" />

        </div>
    </div>
</template>
<style scoped>
.custom-grid {
    grid-template-columns: 30px 350px 80px 80px 80px 80px 112px 80px 80px 20px;
    gap: 10px;

    @media (max-width: 600px) {
        grid-template-columns: 50px 100px 100px;
    }

}
</style>