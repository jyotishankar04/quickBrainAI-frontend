// function to extract username from a url

export const extractUsername = (url) => {
  if (!url) return "";
  const urlParts = url.split("/");
  return urlParts[urlParts.length - 1];
};
