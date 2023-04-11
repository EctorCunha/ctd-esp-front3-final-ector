export function getComicIdFromUrl(url: string) {
  const id = url.split("/").pop();

  if (id) {
    return id;
  }

  return "";
}
