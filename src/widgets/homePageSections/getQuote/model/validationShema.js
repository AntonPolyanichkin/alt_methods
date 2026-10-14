import * as yup from "yup";

export const getQuoteSchema = yup.object({
  name: yup.string().trim().required("nameRequired").min(2, "nameShort").max(100, "nameLong"),

  email: yup.string().trim().required("emailRequired").email("emailInvalid"),

  company: yup.string().trim().max(150, "companyLong"),

  phone: yup
    .string()
    .trim()
    .required("phoneRequired")
    .matches(/^[+\d][\d\s()-]{6,}$/, "phoneInvalid"),

  service: yup.string().trim().required("serviceRequired"),

  projectDescription: yup
    .string()
    .trim()
    .required("descriptionRequired")
    .min(10, "descriptionShort")
    .max(2000, "descriptionLong"),

  processingData: yup.boolean().oneOf([true], "consentRequired"),
});
