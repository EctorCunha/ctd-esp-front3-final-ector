export function letterCounter(x: string, numberOfCaracters: number) {
  const numbersCharacters = x.replace(/[^a-zA-Z]/g, "").length;
  if (numbersCharacters > numberOfCaracters) {
    return x.substring(0, numberOfCaracters).concat(" ...");
  }
  return x;
}
