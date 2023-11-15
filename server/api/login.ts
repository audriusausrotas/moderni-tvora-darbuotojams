import { userSchema } from "../models/userSchema";
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  console.log(email)
  const data = await userSchema.findOne({ email });

  if (!data)
    return { success: false, data: null, message: "Vartotojas nerastas" };

  if (!data.verified)
    return { success: false, data: null, message: "Vartotojas nepatvirtintas" };

  if (await bcrypt.compare(password, data.password)) {
    const token = jwt.sign(
      {
        id: data._id,
        email: data.email,
        verified: data.verified,
        admin: data.admin,
      },
      process.env.TOKEN_SECRET
    );

  data.password = "";
  console.log(data)

  return { success: true, data: data, message: "all good" };
});
