<script setup lang="js">
const { placeholder, label, type, name, width, active, variant, disable } = defineProps(["placeholder", "label", "type", "name", "width", "active", "variant", "disable"]);
const emit = defineEmits(["onChange", "EnterPressed"]);

const emitUpdate = (value) => {
  emit("onChange", value);
};

const inputRef = ref(null);

const handleEnterKey = () => {
  emit("EnterPressed");
};

onMounted(() => {
  if (active && inputRef.value) {
    inputRef.value.focus();
  }
});

</script>


<template>
  <div class="flex flex-col gap-2 capitalize">
    <label v-if="label" :for="label" class="pl-2 text-sm">{{ label }}</label>

    <div
      class="flex items-center justify-center gap-3 px-4 py-2 overflow-auto border rounded-lg shadow-sm border-dark-light "
      :class="width ? width : 'w-60', variant === 'light' ? 'bg-white' : 'bg-gray-ultra-light'">
      <slot />
      <input :value="name" :placeholder="placeholder" :id="label" :type="type" :disabled="disable || false"
        @input="emitUpdate($event.target.value)" @keyup.enter="handleEnterKey" ref="inputRef"
        class="w-full h-full overflow-scroll border-0 outline-none active:outline-none bg-inherit active:border-0" />
    </div>
  </div>
</template>
<style scoped></style>
