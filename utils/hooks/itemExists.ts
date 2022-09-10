export default function itemExists(name: string): boolean | undefined {
  // invariant(typeof name !== 'string', 'Product does not exist');

  if (localStorage.getItem('cart-items')) {
    const lsItems = localStorage.getItem('cart-items');
    let parsedLsItems;
    if (lsItems) {
      parsedLsItems = JSON.parse(lsItems);
    }
    const exists = parsedLsItems.some((item: any) => {
      if (item.name === name) return true;
      else return false;
    });

    return Boolean(exists);
  }
}
