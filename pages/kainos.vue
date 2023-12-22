<script setup>
import { useProductsStore } from "~/store/products";

const useProducts = useProductsStore();

</script>
<template>
  <div class="flex flex-col gap-8">
    <PriceNew />
    <div class="flex flex-col ">
      <div class="grid gap-2 p-4 font-semibold capitalize custom-grid bg-gray-ultra-light rounded-t-3xl">
        <p>nr</p>
        <p>pavadinimas</p>
        <p>kaina</p>
        <p>savikaina</p>
        <p></p>
      </div>
      <div v-for="(product, index) in useProducts.products" :key="product._id"
        class="grid items-center gap-2 p-4 border-b custom-grid">
        <PriceElement :index="index" :product="product" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.custom-grid {
  grid-template-columns: 30px auto 96px 96px 20px 20px;

  @media (max-width: 600px) {
    grid-template-columns: 50px 100px 100px;
  }

}
</style>
