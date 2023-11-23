import { userSchema } from "../models/userSchema";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const { url, password, _id, newPassword } = await readBody(event);

  if (password !== newPassword)
    return { success: false, data: null, message: "slaptažodžiai nesutampa" };

  const data = await userSchema.findById(_id);

  if (!data)
    return {
      success: false,
      data: null,
      message: "Vartotojas nerastas",
    };

  if (url.trim() !== "") data.photo = url;

  if (password.trim() !== "") {
    data.password = await bcrypt.hash(password, +process.env.SALT);
  }

  const newData = await data.save();

  newData.password = "";

  return { success: true, data: newData, message: "" };
});
