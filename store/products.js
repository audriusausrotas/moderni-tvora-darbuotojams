import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProductsFromWebsite() {
      console.log("fecina produktus");
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

    async fetchProducts(){
      const {data} = await $fetch("/api/products");
      this.products = [...data]
    },

    newProduct(data){
      this.products.push(data)
    }
  },

  getters: {
    updateProduct: (store)=> (data)=>{
      store.products = store.products.map(item=> {
       if (item._id === data._id) return data
       else return item
      })
    },

    deleteProduct: (store)=> (_id)=>{
      store.products = store.products.filter((item) =>
      item._id !== _id
      )
    }
  }
});
