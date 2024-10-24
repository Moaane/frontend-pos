const formatter = (
  price: number,
  format: "currency" | "decimal" = "currency"
) => {
  return new Intl.NumberFormat("default", {
    style: format,
    currency: "IDR",
  }).format(price);
};

export default formatter;
