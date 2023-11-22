<script setup>
import { useProductsStore } from "~/store/products";

const useProducts = useProductsStore();

const products = ref(useProducts.products);

watch(
  () => useProducts.products,
  (newProducts) => {
    products.value = newProducts;
  }
);
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex text-lg font-semibold capitalize pr-36">
      <p class="w-10">nr</p>
      <p class="flex-1">produkto pavadinimas</p>
      <p class="w-32 text-end">kaina</p>
      <p class="w-32 text-end">savikaina</p>
    </div>
    <div
      v-for="(product, index) in products"
      :key="index"
      class="flex border-b"
    >
      <p class="w-10">{{ index + 1 }}</p>
      <h2 class="flex-1">{{ product.name }}</h2>
      <h2 class="w-32 text-end">
        {{ product.max_discounted_price || product.price_wo_vat }}
      </h2>
      <h2 class="w-32 text-end">
        {{ product.max_discounted_price || product.price_wo_vat }}
      </h2>
      <div class="w-20 text-green-500 text-end hover:cursor-pointer">Edit</div>
      <div class="flex justify-end w-16 hover:cursor-pointer">
        <NuxtImg src="/icons/delete.svg" width="24" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
