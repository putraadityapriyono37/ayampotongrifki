export function wa(text: string) {
  return `https://wa.me/6285702255674?text=${encodeURIComponent(text)}`;
}
// (opsional) alias supaya keduanya tersedia
export const waLink = wa;
