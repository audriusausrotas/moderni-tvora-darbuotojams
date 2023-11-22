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
  <div>
    <div v-for="(product, index) in products" :key="index" class="flex gap-8">
      <h2>{{ product.name }}</h2>
      <h2>{{ product.max_discounted_price || product.price_wo_vat }}</h2>
    </div>
  </div>
</template>
<style scoped></style>
