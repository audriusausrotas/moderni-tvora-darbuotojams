import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: reactive([]),
  }),

  actions: {
    async fetchProducts() {
      // try {
      //   let currentPage = 1;
      //   let totalPages = 1;
      //   let allProducts = [];
      //   while (currentPage <= totalPages) {
      //     const response = await $fetch(
      //       `https://modernitvora.lt/api/api/public/products?page=${currentPage}`
      //     );
      //     const { data, last_page } = response.products;
      //     allProducts = [...allProducts, ...data];
      //     totalPages = last_page;
      //     currentPage++;
      //   }
      //   this.products = [...allProducts];
      // } catch (error) {
      //   console.error("Error fetching products:", error);
      // }
    },
  },
});
