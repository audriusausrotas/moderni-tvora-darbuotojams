<script setup >
const { name, value } = defineProps(['name', 'value']);
</script>
 
<template>
    <div class="flex items-center">
        <div class="w-40 p-3 capitalize border-r bg-gray-ultra-light">{{ name }}</div>
        <div class="flex-1 px-4 min-w-fit">{{ value }}</div>
    </div>
</template>
