// Той самий плейсхолдер-підхід, що й у projects.js — чесний один плейсхолдер
// замість вигаданих "різних" фото. Замініть на реальні, коли будуть.
// import placeholderImage from "../pictures/picture.webp";

// Тільки структурні, НЕперекладні поля. title/description/callout/works —
// усе живе в i18n під ключем serviceDetail.<slug>.* (slug використовується
// буквально як ключ JSON, напряму, без додаткового мапінгу в camelCase).
export const servicesList = [
  {
    slug: "Wind turbine inspection and painting",
    heroImage: "./servicesImg/picture_01.webp",
    gallery: ["./servicesImg/picture_03.webp", "./servicesImg/picture_11.webp"],
  },
  {
    slug: "NDT ship inspection",
    heroImage: "./servicesImg/picture_20.webp",
    gallery: [],
  },
  {
    slug: "Mine inspection",
    heroImage: "./servicesImg/picture_19.webp",
    gallery: ["./servicesImg/picture_18.webp", "./servicesImg/picture_17.webp"],
  },
  {
    slug: "Crane installation ",
    heroImage: "./servicesImg/picture_04.webp",
    gallery: [],
  },
  {
    slug: "Pipe shortening",
    heroImage: "./servicesImg/picture_12.webp",
    gallery: ["./servicesImg/picture_13.webp"],
  },
  {
    slug: "Installation of new equipment on the crane boom and painting",
    heroImage: "./servicesImg/picture_21.webp",
    gallery: [],
  },
  {
    slug: "Snow removal",
    heroImage: "./servicesImg/picture_09.webp",
    gallery: [],
  },
  {
    slug: "Absorber cleaning",
    heroImage: "./servicesImg/picture_22.webp",
    gallery: [],
  },
];

export function getServiceBySlug(slug) {
  return servicesList.find((s) => s.slug === slug);
}
