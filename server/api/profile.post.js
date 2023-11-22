import { userSchema } from "../models/userSchema";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const { url, password, _id, newPassword } = await readBody(event);

  const data = await userSchema.findById(_id);

  if (!data)
    return {
      success: false,
      data: null,
      message: "Vartotojas nerastas",
    };

  if (url.trim() !== "") data.photo = url;

  if (newPassword.trim() !== "") {
    data.password = await bcrypt.hash(newPassword, +process.env.SALT);
  }

  const newData = await data.save();

  newData.password = "";

  return { success: true, data: newData, message: "" };
});
