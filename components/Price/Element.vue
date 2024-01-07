<script setup lang="js">
import  {useProductsStore}  from "~/store/products";
import { categories } from "~/data/selectFieldData";

const { product, index } = defineProps(["product", "index"]);
const useProducts = useProductsStore();

const disable = useState(`disable${index}`, () => true);
const productName = useState(`name${index}`, () => product.name);
const productPrice = useState(`price${index}`, () => product.price);
const productCost = useState(`cost${index}`, () => product.cost);
const productCategory = useState(`category${index}`, () => product.category);

const editHandler = () => {
    disable.value = !disable.value;
};

const deleteHandler = async () => {
    const data = await $fetch("/api/product", {
        method: "delete",
        body: { _id: product._id }
    });
    if (data.success) {
        useProducts.deleteProduct(product._id);
    }
};

const saveHandler = async () => {
    if (product.cost === productCost.value && product.price === productPrice.value && product.name === productName.value && productCategory.value === product.category) return disable.value = true;

    const newData = { _id: product._id, name: productName.value, price: productPrice.value, cost: productCost.value, category: productCategory.value };

    const data = await $fetch("/api/product", {
        method: "patch",
        body: newData
    });

    if (data.success) {
        useProducts.updateProduct(data.data);
        disable.value = true;
    }
};
</script>

<template>
  <td class="p-2">{{ index + 1 }}</td>
  <td class="p-2">
    <BaseInput
      :name="productName"
      width="w-auto"
      :disable="disable"
      :variant="disable ? '' : 'light'"
      @onChange="(v) => (productName = v)"
    />
  </td>
  <td class="p-2">
    <BaseInput
      :name="productPrice || 0"
      width="w-24"
      type="number"
      :disable="disable"
      :variant="disable ? '' : 'light'"
      @onChange="(v) => (productPrice = v)"
    />
  </td>
  <td class="p-2">
    <BaseInput
      :name="productCost || 0"
      width="w-24"
      type="number"
      :disable="disable"
      :variant="disable ? '' : 'light'"
      @onChange="(v) => (productCost = v)"
    />
  </td>
  <td>
    <BaseSelectField
      :values="categories"
      :disable="disable"
      variant="light"
      id="categories"
      :defaultValue="productCategory"
      width="w-56"
      @onChange="(v) => (productCategory = v)"
    />
  </td>
  <td>
    <NuxtImg
      v-if="disable"
      src="/icons/edit.svg"
      width="20"
      @click="editHandler"
      class="w-full p-1 m-auto rounded-md hover:cursor-pointer hover:bg-green-100"
    />
    <NuxtImg
      v-else
      src="/icons/checked.svg"
      width="20"
      @click="saveHandler"
      class="w-full p-1 m-auto rounded-md hover:cursor-pointer hover:bg-green-100"
    />
  </td>
  <td>
    <NuxtImg
      src="/icons/delete.svg"
      width="20"
      @click="deleteHandler"
      class="w-full p-1 m-auto rounded-md hover:cursor-pointer hover:bg-red-ulta-light"
    />
  </td>
</template>
