import { productSchema } from "../models/productSchema";

export default defineEventHandler(async (event) => {
  const {id, name, price, cost, image, asdf } = await readBody(event);

  // const data = await productSchema.findOne({ name });

  // if (data)
  //   return { success: false, data: null, message: "Produktas nerastas" };

  
  // const product = new productSchema({
  //   name,
  //   price,
  //   cost: cost || "",
  //   image: image || "",
  // });
  // console.log(product)

  // const data = await product.save();


  return { success: true, data: data, message: "Pakeitimai atlikti" };

 
});
