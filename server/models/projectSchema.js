import { defineMongooseModel } from "#nuxt/mongoose";

export const projectSchema = defineMongooseModel(
  "projectSchema",
  {
    client: {
      type: Array,
      required: false,
      default: []
    },
    fences: {
      type: Array,
      required: false,
      default: []
    },
    results: {
      type: Array,
      required: false,
      default: []
    },
  },
  { collection: "projects" }
);
