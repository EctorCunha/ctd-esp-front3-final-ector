export function getCharacterIdFromUrl(url: string) {
  const regex = /\/characters\/(\d+)/;
  const match = url.match(regex);
  if (match) {
    return match[1];
  }
  return null;
}
