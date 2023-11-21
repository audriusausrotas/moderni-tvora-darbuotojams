import jwt from "jsonwebtoken";
import { useCookie } from "nuxt/app";

export default defineEventHandler(async (event) => {
  if (event.node.req.url.includes("auth")) {
    const body = await readBody(event);
    const token = getCookie(event, "mtud");
    const asdf = useCookie("mtud");
    console.log(asdf);
    if (!token) token = asdf;

    console.log("pries tokena");
    console.log("middle => " + token);
    if (token) {
      console.log("tokene");
      jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (!err && user.verified) {
          console.log(user._id);
          body._id = user.id;
        }
      });
    }
  }
});
