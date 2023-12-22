import { productSchema } from "../models/productSchema";

export default defineEventHandler(async (event) => {
  const {name, price, cost, image} = await readBody(event);


  const doesExist = await productSchema.findOne({ name });

  if (doesExist)
    return { success: false, data: null, message: "Produktas jau egzistuoja" };

   const product = new productSchema({
     name ,
     price: price || 0,
     cost: cost || 0,
     image: image || "",
    });

  
    const data =  await product.save();
 
  return { success: true, data: data, message: "Pakeitimai atlikti" };
});
