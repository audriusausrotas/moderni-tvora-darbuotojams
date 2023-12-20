import { productSchema } from "../models/productSchema";

export default defineEventHandler(async (event) => {
  const {name, price, cost, image} = await readBody(event);


  const doesExist = await productSchema.findOne({ name });

  if (doesExist)
    return { success: false, data: null, message: "Produktas jau egzistuoja" };

   const product = new productSchema({
     name ,
     price,
     cost: cost || "",
     image: image || "",
    });
  
    const data =  await product.save();
 
  return { success: true, data: data, message: "Pakeitimai atlikti" };
});
