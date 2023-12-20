<script setup lang='js'>
import { useResultsStore } from '~/store/results';

const useResults = useResultsStore();

</script>
 
<template>
    <div>
        <div class="grid gap-3 p-4 font-semibold capitalize rounded-t-3xl custom-grid bg-gray-ultra-light">
            <p>Nr</p>
            <p>Pavadinimas</p>
            <p>Kiekis</p>
            <p>Kaina</p>
            <p>viso</p>
            <p>Savikaina</p>
            <p>sav. viso</p>
            <p>pelnas</p>
            <p>marža</p>
            <p></p>
        </div>
        <div class="grid items-center gap-3 p-4 border-b custom-grid">
            <ResultFenceElement />
        </div>
    </div>
</template>
<style scoped>
.custom-grid {
    grid-template-columns: 30px auto 80px 80px 80px 80px 80px 80px 80px 20px;

    @media (max-width: 600px) {
        grid-template-columns: 50px 100px 100px;
    }
}
</style>