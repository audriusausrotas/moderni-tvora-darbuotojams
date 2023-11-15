export default defineEventHandler(async (event) => {
  console.log("aa");
  const { email, password } = await readBody(event);

  return { success: true, data: null, message: "all good" };
});
