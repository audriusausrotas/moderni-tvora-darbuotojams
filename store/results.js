import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useProjectStore } from "./project";
import { useProductsStore } from "./products";

const initialResult = {
  id:"",
  name:"",
  quantity: "",
  price: "",
  totalPrice:"",
  cost:"",
  totalCost:"",
  profit:"",
  margin:""
}

export const useResultsStore = defineStore("results", {
  state: () => ({
    results: [],
  }),

  actions: {
    calculateResults(){
      const useProject = useProjectStore();
      const products = useProductsStore().products;
      
    }
   
  },

  getters: {
  
  }
});
