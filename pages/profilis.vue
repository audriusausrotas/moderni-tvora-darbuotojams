<script setup>
import { useFetch } from "nuxt/app";
import { useUserStore } from "~/store/user";

const useUser = useUserStore();

const initials = computed(() => useUser.user?.username.slice(0, 2));
const url = ref("");
const newPassword = ref("");
const password = ref("");

const saveHandler = async () => {
  const reqData = {
    url: url.value,
    newPassword: newPassword.value,
    password: password.value,
  };

  const { data } = await useFetch("/api/profile", {
    method: "post",
    body: reqData,
  });
  if (data.value.success) {
    useUser.setUser(data.value.data);
    password.value = "";
    newPassword.value = "";
    url.value = "";
  }
};
</script>

<template>
  <div class="flex gap-12">
    <div class="flex flex-col gap-4">
      <div
        class="flex items-center justify-center overflow-hidden bg-gray-100 rounded-xl h-60 w-60"
      >
        <NuxtImg
          v-if="useUser.user.photo"
          :src="useUser.user.photo"
          class="object-cover object-center w-full h-full"
        />
        <div v-else class="text-3xl uppercase">{{ initials }}</div>
      </div>
      <BaseInput
        :name="url"
        @update:name="(v) => (url = v)"
        placeholder="Nuotraukos nuoroda"
      />
    </div>

    <div class="flex gap-12">
      <div class="flex flex-col gap-4 capitalize">
        <p v-if="useUser.user.admin">administratorius</p>
        <p v-else>Paprastas vartotojas</p>
        <div>
          {{ useUser.user.username }}
        </div>
        <div>{{ useUser.user.email }}</div>
      </div>
      <div class="flex flex-col gap-4">
        <BaseInput
          :name="newPassword"
          type="password"
          @update:name="(v) => (newPassword = v)"
          placeholder="Naujas slaptažodis"
        />
        <BaseInput
          :name="password"
          type="password"
          @update:name="(v) => (password = v)"
          placeholder="dabartinis slaptažodis"
        />
        <BaseButton name="išsaugoti pakeitimus" @click="saveHandler" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
