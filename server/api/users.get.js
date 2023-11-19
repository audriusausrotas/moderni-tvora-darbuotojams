import { userSchema } from "../models/userSchema";

export default defineEventHandler(async (event) => {
  const data = await userSchema.findById();

  if (!data) return response(res, false, null, "Vartotojai nerasti");

  const updatedData = data.map((item) => {
    item.password = "";
    return item;
  });

  return { success: true, data: updatedData, message: "" };
});
