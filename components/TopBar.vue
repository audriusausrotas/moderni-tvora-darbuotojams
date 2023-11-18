<script setup lang="js">

const route = useRoute()
const currentPath = ref(route.path.replace("/", ""))

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath.replace("/", "")
  }
)
</script>

<template>
  <div class="shadow-bottom">
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
      <div class="flex items-center gap-2">
        <div
          class="flex items-center justify-center w-12 h-12 font-semibold text-center rounded-full bg-dark"
        >
          AD
        </div>
        <div>username</div>
        <NuxtImg src="/icons/arrowDown.svg" />
      </div>
    </div>
  </div>

  <div class="flex items-center gap-2 px-12 py-6 m-auto max-w-custom">
    <NuxtImg src="/icons/menu.svg" width="16" />
    <h2 class="text-xl font-bold capitalize">
      {{ currentPath.length > 0 ? currentPath : "Projektai" }}
    </h2>
  </div>
</template>
<style scoped></style>
