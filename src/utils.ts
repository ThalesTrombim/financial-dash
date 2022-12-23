function moneyValueMask(val: number) {
  return val.toLocaleString() + ',00';
}

export { moneyValueMask };