<script setup lang="js">
import {useUserStore} from "~/store/user"

const menuLinks = [{name: "Projektai", link: "/", iconPath: "/icons/projects.svg"},{name: "Skaičiuoklė", link: "/skaiciuokle", iconPath: "/icons/calculations.svg"},{name: "Sąmata", link: "/samata", iconPath: "/icons/projects.svg"},{name: "Kainos", link: "/kainos", iconPath: "/icons/prices.svg"},]

const route = useRoute()
const useUser = useUserStore()
const currentPath = ref(route.path.replace("/", ""))

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath.replace("/", "")
  }
)
</script>

<template>
  <nav v-if="useUser?.user?.username" class="flex flex-col gap-10 w-fit">
    <div v-if="useUser?.user?.username" class="flex items-center gap-2">
      <NuxtImg src="/icons/menu.svg" width="16" />
      <h2 class="text-xl font-bold capitalize">
        {{ currentPath.length > 0 ? currentPath : "Projektai" }}
      </h2>
    </div>

    <div>
      <div class="flex items-center gap-2">
        <NuxtImg src="/icons/arrowDown.svg" width="8" />
        <h4 class="text-sm capitalize">panelė</h4>
      </div>

      <div v-for="link in menuLinks">
        <NuxtLink
          :to="link.link"
          class="flex gap-2 px-4 py-2 rounded-md w-36 hover:bg-dark"
        >
          <NuxtImg :src="link.iconPath" width="20" />

          {{ link.name }}</NuxtLink
        >
      </div>
    </div>

    <div>
      <div class="flex items-center gap-2">
        <NuxtImg src="/icons/arrowDown.svg" width="8" />
        <h4 class="text-sm capitalize">admin panelė</h4>
      </div>
      <NuxtLink
        to="/admin"
        class="flex gap-2 px-4 py-2 rounded-md hover:bg-dark"
      >
        <NuxtImg src="/icons/users.svg" width="20" />
        <h3 class="capitalize">vartotojai</h3>
      </NuxtLink>
    </div>
  </nav>
</template>
<style scoped></style>
