export default function returnHowManyArguments(...args) {
  let total = 1;
  for (const arg of args) {
    if (!Number.isNaN(Number(arg))) {
      total += arg;
    }
  }
  return total;
}
