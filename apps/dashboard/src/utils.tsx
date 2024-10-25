export const readableDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const numericDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
