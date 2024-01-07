<script setup lang="js">
const props = defineProps(["width", "data", "name", "index" ])
const emit = defineEmits(["onClick", "onChange"]);
const inputRef = ref(null);
const filteredData = useState("filteredData", () => [])
const open = useState("searchOpen" + props.index, ()=> false)

const emitUpdate = (value) => {
  if (value.length === 0) {
    filteredData.value = []
    open.value = false
  } else {
    open.value = true
  }
  emit("onChange", value);
  filteredItems(props.name)
};

const emitClick = (value) => {
  emit("onClick", value);
  open.value = false
};

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.focus();
  }
});

const filteredItems = (value) => {
  const regex = new RegExp(value, "i");
  filteredData.value = [...props.data.filter((item) => regex.test(item.name))];
};
</script>

<template>
  <div class="relative">
    <input
      class="px-4 py-2 overflow-auto bg-white border rounded-lg shadow-sm outline-none border-dark-light"
      :class="props.width ? props.width : 'w-60'"
      placeholder="Pavadinimas"
      :value="props.name"
      @input="emitUpdate($event.target.value)"
      ref="inputRef"
    />
    <ul
      v-if="open"
      class="absolute left-0 z-50 flex flex-col overflow-auto bg-white border divide-y rounded-lg shadow-sm top-10 border-dark-light max-h-80"
    >
      <li
        v-for="item in filteredData"
        :key="item.id"
        @click="emitClick(item)"
        class="px-4 py-1 odd:bg-gray-ultra-light hover:cursor-pointer hover:bg-red-full hover:text-white"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
