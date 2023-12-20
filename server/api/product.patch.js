import { productSchema } from "../models/productSchema";

export default defineEventHandler(async (event) => {
  const { name, price, cost, _id } = await readBody(event);

  const updatedData = {
    name,
    price,
    cost , 
  };

  const data = await productSchema.findOneAndUpdate({ _id }, updatedData, { new: true });

  if (!data) {
    return { success: false, data: null, message: "Produktas neegzistuoja" };
  }

  return { success: true, data, message: "Pakeitimai atlikti" };
});
