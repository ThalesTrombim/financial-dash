function moneyValueMask(val: number) {
  return `R$ ${val.toLocaleString()}`;
}

function handleInputFocus(e: Event) {
  const target = e.target as HTMLInputElement;

  target.select();
  return true;
}

export { moneyValueMask, handleInputFocus };