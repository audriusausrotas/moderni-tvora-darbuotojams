export default function getPriceItem(name) {
  const products = useProductsStore().products;
  return products.find((productItem) => productItem.name.includes(name));
}
