function moneyValueMask(val: number) {
  return `R$ ${val.toLocaleString()}`;
}

export { moneyValueMask };