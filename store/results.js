import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useProjectStore } from "./project";
import { useProductsStore } from "./products";

const initialResult = {
  id: "",
  name: "",
  quantity: "",
  price: "",
  totalPrice: "",
  cost: "",
  totalCost: "",
  profit: "",
  margin: "",
};

export const useResultsStore = defineStore("results", {
  state: () => ({
    results: [],
  }),

  actions: {
    calculateResults() {
      const useProject = useProjectStore();
      const products = useProductsStore().products;

      this.results = [];

      const fenceTypes = [];

      useProject.fences.forEach((item) => {
        const initialData = {
          name: item.type,
          color: item.color,
          length: item.totalLength,
          sq: item.totalSQ,
          material: item.material,
        };

        let exist = false;

        fenceTypes.forEach((fenceItem) => {
          if (
            fenceItem.name === item.type &&
            fenceItem.color === item.color &&
            fenceItem.material === item.material
          ) {
            fenceItem.length += item.totalLength || 0;
            fenceItem.sq += item.totalSQ || 0;
            exist = true;
          }
        });
        console.log(fenceTypes);
        console.log(this.results);

        if (!exist) {
          fenceTypes.push(initialData);
        }

        fenceTypes.forEach((item) => {
          const product = products.find((productItem) =>
            productItem.name.includes(item.name)
          );

          const resultData = {
            id: uuidv4(),
            name: item.name,
            quantity: item.sq,
            price: product.price || 0,
            totalPrice: "",
            cost: product.cost || 0,
            totalCost: "",
            profit: "",
            margin: "",
          };
          this.results.push(resultData);
        });
      });
    },

    deleteResult(id) {
      this.results = this.results.filter((item) => item.id !== id);
    },
  },

  getters: {},
});
