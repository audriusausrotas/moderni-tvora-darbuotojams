<script setup lang="js">
import { useUserStore } from '~/store/user';
import useError from '~/composables/useError';


const useUser = useUserStore();
const {setError, message, isError} = useError()
const password = ref("")
const modalOpen = ref(false)
const selectedUser = ref("")

if (useUser.users.length === 0){
  const data = await useFetch("/api/users");
  useUser.setAllUsers(data.data.value.data)
}

const userChangesHandler = async (id, type)=>{

  const postData = {userId:id, changeType:type, password: password.value}

  const {data} = await useFetch("/api/userChanges", {
    method:"post",
    body: postData
  })

  if (data.value.success){
    if (type !== "delete"){
      useUser.updateUser(data.value.data)
    }
    else {
      modalOpen.value = false
      useUser.deleteUser(data.value.data)
      password.value = ""
      selectedUser.value = ""
    }
  } else {
    setError(data.value.message, true)
  }
}

const confirmHandler = ()=>{
  if (password.value.trim().length > 4 || selectedUser.value.length > 0) {
    userChangesHandler(selectedUser.value, "delete");
  } else {
    setError("Įveskite spaltažodį", true)
  }
}

const deleteHandler= (id)=>{
  selectedUser.value = id;
  modalOpen.value = true;
}
</script>

<template>
  <div>
    <div class="flex pb-6 text-gray-400 capitalize">
      <div class="flex-1">nr</div>
      <p class="flex-[4]">vartotojo vardas</p>
      <p class="flex-[4]">paskyros statusas</p>
      <p class="flex-[6]">el. paštas</p>
      <p class="flex-[4]">paskyros tipas</p>
      <div class="flex-1"></div>
    </div>

    <div
      v-for="(user, index) in useUser.users"
      :key="user._id"
      class="flex py-4 capitalize border-b"
    >
      <div class="flex-1">{{ index + 1 }}</div>
      <p class="flex-[4]">{{ user.username }}</p>
      <div class="flex-[4]">
        <div
          :class="user.verified ? 'bg-verified ' : 'bg-unverified'"
          class="flex gap-2 px-4 py-1 rounded-lg w-36 hover:cursor-pointer"
          @click="userChangesHandler(user._id, 'verify')"
        >
          <NuxtImg
            :src="user.verified ? '/icons/ellipseg.svg' : '/icons/ellipser.svg'"
            width="8"
          />
          {{ user.verified ? "patvirtintas" : "nepatvirtintas" }}
        </div>
      </div>
      <div class="flex-[6]">{{ user.email }}</div>
      <div
        class="flex-[4] hover:cursor-pointer"
        :class="user.admin ? 'text-green-500' : 'text-yellow-500'"
        @click="userChangesHandler(user._id, 'admin')"
      >
        {{ user.admin ? "administratorius" : "paprastas vartotojas" }}
      </div>
      <div
        class="flex justify-end flex-1 hover:cursor-pointer"
        @click="deleteHandler(user._id)"
      >
        <NuxtImg src="/icons/delete.svg" alt="delete button " width="24" />
      </div>
    </div>
  </div>
  <div
    v-if="modalOpen"
    class="absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-slate-200"
  >
    <div
      class="flex flex-col items-center gap-8 p-12 bg-white border shadow-md rounded-xl"
    >
      <div class="flex flex-col items-center gap-8">
        <p>Įveskite slaptaždodį norėdami ištrinti vartotoją</p>
        <BaseInput
          placeholder="Slaptažodis"
          :name="password"
          type="password"
          @update:name="(v) => (password = v)"
        />
      </div>
      <div class="flex gap-4">
        <BaseButton name="atšaukti" @click="() => (modalOpen = false)" />
        <BaseButton name="patvirtinti" @click="confirmHandler" />
      </div>
      <Error :message="message" :isError="isError" />
    </div>
  </div>
</template>
<style scoped></style>
