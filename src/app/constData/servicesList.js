// Тільки структурні, НЕперекладні поля.
// - slug: використовується буквально як ключ i18n → serviceDetail.<slug>.*
// - category: ключ категорії; підпис лежить в portfolioPage.categories.<category>
// - heroImage/gallery: шляхи до фото
const getImageUrl = (name) => {
  // Шукає картинку в папці src/assets/
  return new URL(`./servicesImg/${name}`, import.meta.url).href;
};
const gePostetImageUrl = (name) => {
  // Шукає картинку в папці src/assets/
  return new URL(`./servicesPosterImg/${name}`, import.meta.url).href;
};
export const servicesList = [
  {
    slug: "wind-turbine-inspection-and-painting",
    category: "inspection",
    heroImage: getImageUrl("picture_01.webp"),
    posterImg: gePostetImageUrl("poster-picture-01.webp"),
    gallery: [getImageUrl("picture_03.webp"), getImageUrl("picture_11.webp")],
  },
  {
    slug: "ndt-ship-inspection",
    category: "inspection",
    heroImage: getImageUrl("picture_20.webp"),
    posterImg: gePostetImageUrl("poster-picture-02.webp"),
    gallery: [],
  },
  {
    slug: "mine-inspection",
    category: "inspection",
    heroImage: getImageUrl("picture_19.webp"),
    posterImg: gePostetImageUrl("poster-picture-03.webp"),
    gallery: [getImageUrl("picture_18.webp"), getImageUrl("picture_17.webp")],
  },
  {
    slug: "crane-installation",
    category: "installation",
    heroImage: getImageUrl("picture_04.webp"),
    posterImg: gePostetImageUrl("poster-picture-04.webp"),
    gallery: [],
  },
  {
    slug: "pipe-shortening",
    category: "maintenance",
    heroImage: getImageUrl("picture_12.webp"),
    posterImg: gePostetImageUrl("poster-picture-05.webp"),
    gallery: [getImageUrl("picture_13.webp")],
  },
  {
    slug: "installation-of-new-equipment-on-the-crane-boom-and-painting",
    category: "installation",
    heroImage: getImageUrl("picture_21.webp"),
    posterImg: gePostetImageUrl("poster-picture-06.webp"),
    gallery: [],
  },
  {
    slug: "snow-removal",
    category: "maintenance",
    heroImage: getImageUrl("picture_09.webp"),
    posterImg: gePostetImageUrl("poster-picture-07.webp"),
    gallery: [],
  },
  {
    slug: "absorber-cleaning",
    category: "maintenance",
    heroImage: getImageUrl("picture_22.webp"),
    posterImg: gePostetImageUrl("poster-picture-08.webp"),
    gallery: [],
  },
];

export function getServiceBySlug(slug) {
  return servicesList.find((s) => s.slug === slug);
}
