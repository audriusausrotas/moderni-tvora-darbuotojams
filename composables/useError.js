export default function useError() {
  const message = useState("message", () => "");
  const isError = useState("isError", () => false);
  let timeout = null;

  function setError(msg, isErr) {
    clearTimeout(timeout);

    message.value = msg;
    isError.value = isErr;

    timeout = setTimeout(() => {
      message.value = "";
      isError.value = false;
    }, 3000);
  }

  return { message, isError, setError };
}
