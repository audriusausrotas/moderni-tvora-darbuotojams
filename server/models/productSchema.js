import { defineMongooseModel } from "#nuxt/mongoose";

export const productSchema = defineMongooseModel(
  "productSchema",
  {
    name: String,
    price: String,
    cost: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: false,
      default: "",
    },
  },
  { collection: "products" }
);