<script setup lang="js">
import { useUserStore } from '~/store/user';

const { users } = toRefs(useUserStore())

const users2 = [{username: "Audrius"}]

const deleteHandler =(id)=>{
  console.log(id)
}
</script>

<template>
  <div class="w-full p-8 border rounded-3xl justify">
    <div class="flex pb-6 text-gray-400 capitalize">
      <div class="flex-1">nr</div>
      <p class="flex-[4]">full name</p>
      <p class="flex-[4]">account status</p>
      <p class="flex-[6]">email</p>
      <p class="flex-[4]">account type</p>
      <div class="flex-1"></div>
    </div>

    <div
      v-for="(user, index) in users"
      :key="user._id"
      class="flex py-4 capitalize border-b"
    >
      <div class="flex-1">{{ index + 1 }}</div>
      <p class="flex-[4]">{{ user.username }}</p>
      <div class="flex-[4]">
        <div
          :class="user.verified ? 'bg-verified ' : 'bg-unverified'"
          class="flex gap-2 px-2 py-1 rounded-lg w-fit"
        >
          <NuxtImg
            :src="user.verified ? '/icons/ellipseg.svg' : '/icons/ellipser.svg'"
            width="8"
          />
          {{ user.verified ? "verified" : "unverified" }}
        </div>
      </div>
      <div class="flex-[6]">{{ user.email }}</div>
      <div
        class="flex-[4]"
        :class="user.admin ? 'text-green-500' : 'text-yellow-500'"
      >
        {{ user.admin ? "Remove Admin" : "Make admin" }}
      </div>
      <div class="flex justify-end flex-1" @click="deleteHandler(user._id)">
        <NuxtImg src="/icons/delete.svg" alt="delete button " width="24" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
