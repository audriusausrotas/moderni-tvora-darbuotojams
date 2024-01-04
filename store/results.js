import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { useProjectStore } from "./project";
import { useProductsStore } from "./products";

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
        let exist = false;
        const initialData = {
          name: item.type,
          color: item.color,
          length: item.totalLength,
          sq: item.totalSQ,
          material: item.material,
          space: item.space,
        };

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
        if (!exist) {
          fenceTypes.push(initialData);
        }
      });

      fenceTypes.forEach((item) => {
        const product = products.find((productItem) =>
          productItem.name.includes(item.name)
        );

        const totalPrice = product.price * item.sq;
        const totalCost = product.cost * item.sq;
        const profit = totalPrice - totalCost;
        const margin = (
          Math.round((profit / totalPrice) * 10000) / 100
        ).toFixed(2);

        const resultData = {
          id: uuidv4(),
          name: item.name,
          quantity: item.sq,
          color: item.color,
          space: item.space || 0,
          price: product.price || 0,
          totalPrice: totalPrice,
          cost: product.cost || 0,
          totalCost: totalCost,
          profit: profit,
          margin: margin,
        };
        this.results.push(resultData);
      });
    },

    deleteResult(id) {
      this.results = this.results.filter((item) => item.id !== id);
    },
  },

  getters: {},
});
