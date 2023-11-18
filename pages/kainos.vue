<script setup lang="js">
import {useProductsStore} from "~/store/products"
const useProducts = useProductsStore()

const products = useProducts.products
</script>
<template>
  <div>
    <div v-for="(products, index) in products" :key="index" class="flex gap-8">
      <h2>{{ products.name }}</h2>
      <h2>{{ products.price }}</h2>
    </div>
  </div>
</template>
<style scoped></style>
