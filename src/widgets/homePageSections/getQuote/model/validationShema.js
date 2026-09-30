import * as yup from "yup";


export const getQuoteSchema = yup.object({
  name: yup.string().trim().required("Name is required").min(2, "Name is too short").max(100, "Name is too long"),

  email: yup.string().trim().required("Email is required").email("Enter a valid email address"),

  company: yup.string().trim().max(150, "Company name is too long"),

  phone: yup
    .string()
    .trim()
    .required("Phone is required")
    .matches(/^[+\d][\d\s()-]{6,}$/, "Enter a valid phone number"),

  service: yup.string().trim().required("Please specify the service required"),

  projectDescription: yup
    .string()
    .trim()
    .required("Please describe your project")
    .min(10, "Please provide a bit more detail")
    .max(2000, "Description is too long"),

  processingData: yup.boolean().oneOf([true], "You must consent to data processing to submit this form"),
});
