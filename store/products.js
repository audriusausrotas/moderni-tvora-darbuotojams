import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
    fences: [],
    poles: [],
    borders: [],
    crossbars: [],
    holders: [],
    gates: [],
    other: [],
    searchValue: "",
  }),

  actions: {
    async fetchProductsFromWebsite() {
      try {
        let currentPage = 1;
        let totalPages = 1;
        let allProducts = [];
        while (currentPage <= totalPages) {
          const response = await $fetch(
            `https://modernitvora.lt/api/api/public/products?page=${currentPage}`
          );
          const { data, last_page } = response.products;
          allProducts = [...allProducts, ...data];
          totalPages = last_page;
          currentPage++;
        }
        this.products = [...allProducts];
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async fetchProducts() {
      const { data } = await $fetch("/api/products");
      this.products = [...data];
      data.forEach((item) => {
        switch (item.category) {
          case "tvoros":
            this.fences.push(item);
            break;
          case "stulpai":
            this.poles.push(item);
            break;
          case "borteliai":
            this.borders.push(item);
            break;
          case "skersiniai":
            this.crossbars.push(item);
            break;
          case "laikikliai":
            this.holders.push(item);
            break;
          case "vartai":
            this.gates.push(item);
            break;

          default:
            this.other.push(item);
            break;
        }
      });
    },

    updateSearch(value) {
      this.searchValue = value;
    },

    newProduct(data) {
      this.products.push(data);
    },
  },

  getters: {
    updateProduct: (store) => (data) => {
      store.products = store.products.map((item) => {
        if (item._id === data._id) return data;
        else return item;
      });
    },

    deleteProduct: (store) => (_id) => {
      store.products = store.products.filter((item) => item._id !== _id);
    },
  },
});
