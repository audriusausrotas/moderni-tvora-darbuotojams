<script setup lang="js">

const login = ref(true);
const username = ref("");
const email = ref("");
const password = ref("");
const retypePassword = ref("");

const changeLogin = ()=>{
  clearFields()
  login.value = !login.value
};

const  loginHandler = async () => {
  if (!email.value || !password.value) {
    // showError("Užpildykite visus laukus", true);
    return;
  }

  if (!email.value.includes("@")) {
    // showError("Neteisingas elektroninis paštas", true);
    return;
  }
  const loginData = { email: email.value, password: password.value };


    const {data} = await useFetch("/api/login", {
      method:"post",
      body: loginData
    })

    if (!data.value.success){

    } else {

    }



    console.log(data)

      // httpRequests.post("workersLogin", loginData).then((data) => {
      //   console.log(data);
      //   if (!data.success) {
      //     showError(data.message, true);
      //   } else {
      //     loginAction({ token: data.message, user: data.data });
      //     $router.push("/lt/darbuotojams/skaiciuokle");
      //   }
      // });

};

const registerHandler = async () => {

}
const clearFields = () => {
  console.log(email.value)
  email.value = "";
  password.value = "";
  retypePassword.value = "";
  username.value = "";
};
</script>

<template>
  <div class="flex items-center justify-center pt-20">
    <div class="flex flex-col items-center gap-4">
      <h3 v-if="login" class="text-2xl">Prisijungti</h3>
      <h3 v-else class="text-2xl">Registruotis</h3>

      <BaseInput
        v-if="!login"
        :name="username"
        @update:name="(v) => (name = v)"
        placeholder="Vardas"
        label="Vartotojo vardas"
      />

      <BaseInput
        v-model="email"
        :name="email"
        @update:name="(v) => (email = v)"
        placeholder="pavyzdys@gmail.com"
        label="Elektroninis paštas"
      />

      <BaseInput
        :name="password"
        @update:name="(v) => (password = v)"
        placeholder="Slaptažodis"
        label="Slaptažodis"
        type="password"
      />
      <BaseInput
        :name="retypePassword"
        @update:name="(v) => (retypePassword = v)"
        v-if="!login"
        placeholder="Slaptažodis"
        label="Slaptažodio patvirtinimas"
        type="password"
      />

      <BaseButton v-if="login" name="login" @click="loginHandler" />
      <BaseButton v-else name="register" @click="registerHandler" />

      <p v-if="login" class="self-center mt-4">
        Dar neturi paskyros?
        <span class="text-blue-500 hover:cursor-pointer" @click="changeLogin"
          >Registruokis</span
        >
      </p>

      <p v-else class="self-center mt-4">
        Turi paskyrą?
        <span class="text-blue-500 hover:cursor-pointer" @click="changeLogin"
          >Prisijunk</span
        >
      </p>
    </div>
  </div>
</template>

<style scoped></style>
