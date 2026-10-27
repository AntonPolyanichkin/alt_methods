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
    heroImage: getImageUrl("picture_03.webp"),
    posterImg: gePostetImageUrl("poster-picture-01.webp"),
    gallery: [getImageUrl("picture_11.webp"), getImageUrl("picture_30.webp")],
  },
  {
    slug: "ndt-ship-inspection",
    category: "inspection",
    heroImage: getImageUrl("picture_19.webp"),
    posterImg: gePostetImageUrl("poster-picture-02.webp"),
    gallery: [getImageUrl("picture_20.webp"), getImageUrl("picture_18.webp"), getImageUrl("picture_19.webp")],
  },
  {
    slug: "mine-inspection",
    category: "inspection",
    heroImage: getImageUrl("picture_17.webp"),
    posterImg: gePostetImageUrl("poster-picture-11.webp"),
    gallery: [getImageUrl("picture_17.webp")],
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
    gallery: [getImageUrl("picture_13.webp"), getImageUrl("picture_31.webp"), getImageUrl("picture_32.webp")],
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
  {
    slug: "drain-cleaning",
    category: "maintenance",
    heroImage: getImageUrl("picture_24.webp"),
    posterImg: gePostetImageUrl("poster-picture-10.webp"),
    gallery: [getImageUrl("picture_24.webp"), getImageUrl("picture_25.webp")],
  },
  {
    slug: "crown-high-rise-roof-touch-ups",
    category: "maintenance",
    heroImage: getImageUrl("picture_23.webp"),
    posterImg: gePostetImageUrl("poster-picture-09.webp"),
    gallery: [getImageUrl("picture_28.webp")],
  },
  {
    slug: "untitled1",
    category: "maintenance",
    heroImage: getImageUrl("picture_14.webp"),
    posterImg: gePostetImageUrl("poster-picture-12.webp"),
    gallery: [getImageUrl("picture_15.webp"), getImageUrl("picture_16.webp"), getImageUrl("picture_33.webp")],
  },
  {
    slug: "untitled2",
    category: "maintenance",
    heroImage: getImageUrl("picture_27.webp"),
    posterImg: gePostetImageUrl("poster-picture-13.webp"),
    gallery: [getImageUrl("picture_27.webp"),],
  },
  {
    slug: "untitled3",
    category: "maintenance",
    heroImage: getImageUrl("picture_29.webp"),
    posterImg: gePostetImageUrl("poster-picture-14.webp"),
    gallery: [getImageUrl("picture_29.webp")],
  },
];

export function getServiceBySlug(slug) {
  return servicesList.find((s) => s.slug === slug);
}
