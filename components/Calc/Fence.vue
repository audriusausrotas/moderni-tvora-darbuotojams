<script setup lang="js">
import {useProjectStore} from "~/store/project"

const {fence, index} = defineProps(['fence', 'index'])

const useProject = useProjectStore()

const open = useState(fence.id, ()=> true)

const deleteHandler=()=>{
useProject.deleteFence(fence.id)
}
</script>

<template>
  <div class="flex flex-col gap-8 pt-8 border-t-2 border-red-full">
    <div class="flex gap-8">
      <CalcTitle
        :open="open"
        :name="'Tvora ' + (index + 1)"
        @onClick="open = !open"
      />
      <NuxtImg
        src="/icons/delete.svg"
        width="24"
        class="cursor-pointer"
        @click="deleteHandler"
      />
    </div>
    <CalcFenceDetails v-if="open" :index="index" />
  </div>
</template>
