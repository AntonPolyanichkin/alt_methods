const getImageUrl = (name) => {
  // Шукає картинку в папці src/certificatesImg/
  return new URL(`./certificatesImg/${name}`, import.meta.url).href;
};
export const certificatesList = [
  { altKey: "irata-level-2", img: getImageUrl("certificate-02.webp") },
  { altKey: "penetrant-pt-level-2", img: getImageUrl("certificate-03.webp") },
  { altKey: "ultrasonic-ut-level-2", img: getImageUrl("certificate-04.webp") },
  { altKey: "opito-bosiet", img: getImageUrl("certificate-05.webp") },
  { altKey: "eddy-current-et-level-2", img: getImageUrl("certificate-06.webp") },
];
