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
    <div
      class="flex px-8 py-4 text-lg font-semibold capitalize pr-36 bg-inputBg rounded-t-3xl"
    >
      <p class="w-10 text-center">nr</p>
      <p class="flex-[6] min-w-fit">produkto pavadinimas</p>
      <p class="flex-1 min-w-fit">kaina</p>
      <p class="flex-1 min-w-fit">savikaina</p>
      <p class="flex-[1] min-w-fit text-end">Veiksmai</p>
    </div>
    <div
      v-for="(product, index) in products"
      :key="index"
      class="flex px-8 border-b"
    >
      <p class="w-10 text-center">{{ index + 1 }}</p>
      <h2 class="flex-[3]">{{ product.name }}</h2>

      <div class="flex flex-1 gap-4">
        <h2 class="flex-1 min-w-fit">
          {{ product.max_discounted_price || product.price_wo_vat }}
        </h2>
        <h2 class="flex-1 min-w-fit">
          {{ product.max_discounted_price || product.price_wo_vat }}
        </h2>
      </div>

      <div class="flex flex-1 gap-2 min-w-fit">
        <BaseButton type="special" name="edit" width="fit">
          <NuxtImg src="/icons/edit.svg" width="20" />
        </BaseButton>
        <BaseButton type="special" name="delete" width="fit">
          <NuxtImg src="/icons/delete.svg" width="20" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
