<script setup>
const { result, index } = defineProps(["result", "index"]);

const useResults = useResultsStore();
const useProduct = useProductsStore();

const deleteHandler = () => {
  useResults.deleteResult(result.id);
};

const colorEditable = computed(() => result.color === "Kita" || result.isNew);
const spaceEditable = computed(
  () => result.isNew && result.category === "tvoros"
);

watch(
  result,
  () => {
    useResults.recalculateTotals(index);
  },
  { deep: true }
);
</script>

<template>
  <td class="py-3 text-center">{{ index + 1 }}</td>
  <td class="px-1 py-3">
    <BaseSearchField
      width="w-full"
      :data="useProduct.products"
      @OnClick="
        (value) => {
          useResults.selectItem({ index, value });
        }
      "
      @onChange="(value) => useResults.updateName({ index, value })"
      :name="result.name"
      :index="index"
    />
  </td>
  <td class="px-1 py-3">
    <BaseInput
      width="w-24"
      :variant="colorEditable ? 'light' : ''"
      :disable="colorEditable ? false : true"
      :name="result.color"
      @onChange="(value) => useResults.updateColor({ index, value })"
    />
  </td>
  <td class="px-1 py-3">
    <BaseInput
      width="w-24"
      :name="result.space"
      :variant="spaceEditable ? 'light' : ''"
      :disable="spaceEditable ? false : true"
      @onChange="(value) => useResults.updateSpace({ index, value })"
    />
  </td>
  <td class="px-1 py-3">
    <BaseInput
      width="w-24"
      variant="light"
      :name="result.quantity"
      @onChange="(value) => useResults.updateQuantity({ index, value })"
    />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" variant="light" :name="result.price" />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" :name="result.totalPrice" disable="true" />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" :name="result.cost" disable="true" />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" :name="result.totalCost" disable="true" />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" :name="result.profit" disable="true" />
  </td>
  <td class="px-1 py-3">
    <BaseInput width="w-24" :name="result.margin + ' %'" disable="true" />
  </td>
  <td class="">
    <NuxtImg
      src="/icons/delete.svg"
      width="20"
      @click="deleteHandler"
      class="rounded-lg hover:bg-red-light hover:cursor-pointer"
    />
  </td>
</template>
<style scoped></style>
