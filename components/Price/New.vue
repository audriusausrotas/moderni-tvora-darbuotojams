<script setup lang='js'>
import { useProductsStore } from '~/store/products';

const useProducts = useProductsStore();
const open = useState('priceOpen', () => false);
const newName = useState('newName', () => "");
const newPrice = useState('newPrice', () => 0);
const newCost = useState('newCost', () => 0);

const saveHandler = async () => {
    if (newName.value.trim() === "") return;

    const newProduct = { name: newName.value, price: newPrice.value, cost: newCost.value };

    const data = await $fetch("/api/product", {
        method: "post",
        body: newProduct,
    });

    if (data.success) {
        useProducts.newProduct(data.data);
        clearHandler();
    }
};

const clearHandler = () => {
    newName.value = "";
    newPrice.value = 0;
    newCost.value = 0;
    open.value = false;
}

</script>
 
<template>
    <div class="flex flex-col gap-4">
        <BaseButton v-if="!open" name="pridėti naują" @click="open = true" />
        <div v-else class="flex gap-4">
            <BaseButton name="išsaugoti" @click="saveHandler" />
            <BaseButton name="atšaukti" @click="clearHandler" />
        </div>
        <div v-if="open" class="grid gap-2 custom-grid">
            <BaseInput :name="newName" width="w-full" variant="light" label="Pavadinimas"
                @onChange="(v) => (newName = v)" />
            <BaseInput :name="newPrice" width="w-24" type="number" label="Kaina" variant="light"
                @onChange="(v) => (newPrice = v)" />
            <BaseInput :name="newCost" width="w-24" type="number" label="Savikaina" variant="light"
                @onChange="(v) => (newCost = v)" />

        </div>
    </div>
</template>
<style scoped>
.custom-grid {
    grid-template-columns: auto 96px 96px;
}
</style>