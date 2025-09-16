export const getFiatData = (data) => ({
  USD: 1,
  EUR: data?.rates?.EUR,
  RUB: data?.rates?.RUB,
})