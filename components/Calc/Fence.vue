<script setup lang="js">




const {fence, index} = defineProps(['fence', 'index'])
const open = useState('tvora'+index, ()=> true)
</script>
<template>
  <div class="flex flex-col gap-8">
    <CalcTitle
      :open="open"
      :name="'Tvora ' + (index + 1)"
      @onClick="open = !open"
    />
    <CalcFenceDetails v-if="open" />
  </div>
</template>
