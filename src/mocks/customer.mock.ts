import type { Customer } from "@/core/models/customer";

export const customers: Customer[] = [
  {
    id: 1,
    name: "Nazareno",
    identification: "963.654.988",
    email: "nazareno@alegra.com",
    phonePrimary: "111 11 11",
    phoneSecondary: "",
    fax: "",
    mobile: "(333) 555-55-55",
    observations: "",
    address: {
      address: "Avenida Madison",
      city: "New York, USA",
    },
  },
  {
    id: 2,
    name: "Pedro",
    identification: "963.654.988",
    email: "pedro@alegra.com",
    phonePrimary: "111 11 11",
    phoneSecondary: "",
    fax: "",
    mobile: "(333) 555-55-55",
    observations: "",
    address: {
      address: "Avenida Madison",
      city: "New York, USA",
    },
  },
  {
    id: 3,
    name: "Lourdes",
    identification: "963.654.988",
    email: "lourdes@alegra.com",
    phonePrimary: "111 11 11",
    phoneSecondary: "",
    fax: "",
    mobile: "(333) 555-55-55",
    observations: "",
    address: {
      address: "Avenida Madison",
      city: "Lima, PE",
    },
  },
];

export default customers;
