<script setup lang="js">
import { useRouter } from "nuxt/app";
import {useUserStore} from "~/store/user"
import { useProductsStore } from "~/store/products";


const router = useRouter()
const useUser = useUserStore()
const useProducts = useProductsStore()

const isOpen = ref(false)
const initials = computed(() => useUser?.user?.username.slice(0, 2));

// watchEffect(() => {
//   if (useUser.user && !useProducts.products.length > 0) {
//     useProducts.fetchProducts();
//   }
// });

function logoutHandler(){
  useUser.logout()
  router.replace("/login")
}
</script>

<template>
  <div v-if="useUser?.user?.username" class="shadow-bottom">
    <div class="flex items-center gap-4 px-12 py-4 m-auto max-w-custom">
      <div class="flex items-center justify-between flex-1">
        <NuxtImg
          src="/images/logo.png"
          alt="Moderni Tvora logotipas"
          width="86"
        />
        <SearchBar />
      </div>

      <div class="h-12 border"></div>
      <div
        @click="
          () => {
            isOpen = !isOpen;
          }
        "
        class="relative flex items-center gap-2 select-none hover:cursor-pointer"
      >
        <div
          class="flex items-center justify-center w-12 h-12 overflow-hidden font-semibold text-center uppercase rounded-full bg-red-full"
        >
          <NuxtImg
            v-if="true"
            :src="useUser.user.photo"
            class="object-cover object-center w-full h-full"
          />
          <p v-else>{{ initials }}</p>
        </div>

        <div>{{ useUser.user.username }}</div>
        <NuxtImg src="/icons/arrowDown.svg" width="8" />

        <div
          v-if="isOpen"
          class="absolute left-0 flex flex-col bg-white border rounded-md top-14"
        >
          <NuxtLink
            to="/profilis"
            class="px-6 py-2 hover:text-white hover:bg-red-full"
            >Profilis</NuxtLink
          >
          <div
            @click="logoutHandler"
            class="px-6 py-2 hover:text-white hover:bg-red-full hover:cursor-pointer"
          >
            Atsijungti
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
