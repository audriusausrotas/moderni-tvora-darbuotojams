<script setup lang='js'>
import { useProductsStore } from "~/store/products";

const { product, index } = defineProps(["product", "index"]);
const useProducts = useProductsStore();

const disable = useState(`disable${index}`, () => true);
const productName = useState(`name${index}`, () => product.name);
const productPrice = useState(`price${index}`, () => product.price);
const productCost = useState(`cost${index}`, () => product.cost);

const editHandler = () => {
    disable.value = !disable.value;
};

const deleteHandler = async () => {
    const data = await $fetch("/api/product", {
        method: "delete",
        body: { _id: product._id }
    });
    if (data.success) {
        useProducts.deleteProduct(product._id);
    }
};

const saveHandler = async () => {
    if (product.cost === productCost.value && product.price === productPrice.value && product.name === productName.value) return disable.value = true;

    const newData = { _id: product._id, name: productName.value, price: productPrice.value, cost: productCost.value };

    const data = await $fetch("/api/product", {
        method: "patch",
        body: newData
    });

    if (data.success) {
        useProducts.updateProduct(data.data);
        disable.value = true;
    }
};
</script>
 
<template>
    <p>{{ index + 1 }}</p>
    <BaseInput :name="productName" width="w-full" :disable="disable" :variant="disable ? '' : 'light'"
        @onChange="(v) => (productName = v)" />
    <BaseInput :name="productPrice || 0" width="w-24" type="number" :disable="disable" :variant="disable ? '' : 'light'"
        @onChange="(v) => (productPrice = v)" />
    <BaseInput :name="productCost || 0" width="w-24" type="number" :disable="disable" :variant="disable ? '' : 'light'"
        @onChange="(v) => (productCost = v)" />
    <NuxtImg v-if="disable" src="/icons/edit.svg" width="20" @click="editHandler" />
    <NuxtImg v-else src="/icons/checked.svg" width="20" @click="saveHandler" />
    <NuxtImg src="/icons/delete.svg" width="20" @click="deleteHandler" />
</template>
<style scoped></style>