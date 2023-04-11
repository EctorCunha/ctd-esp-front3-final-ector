import { ParsedUrlQuery } from "querystring";
import * as z from "zod";

const addressSchema = z.object({
  address1: z.string().nonempty("Endereço obrigatório"),
  address2: z.string().nullable(),
  city: z.string().nonempty("Cidade obrigatória"),
  state: z.string().nonempty("Estado obrigatório"),
  zipCode: z.string().nonempty("Código Postal obrigatório"),
});

const cardSchema = z.object({
  number: z.string().nonempty("Número obrigatório"),
  cvc: z.string().nonempty("CVC obrigatório"),
  expDate: z.string().nonempty("Data de expiração obrigatória"),
  nameOnCard: z.string().nonempty("Nome obrigatório"),
});

export const checkoutSchema = z.object({
  customer: z.object({
    name: z.string().nonempty({ message: "Nome obrigatório" }),
    lastname: z.string().nonempty({ message: "Sobrenome obrigatório" }),
    email: z
      .string()
      .email({ message: "E-mail inválido" })
      .nonempty({ message: "E-mail obrigatório" }),
    address: addressSchema,
  }),
  card: cardSchema,
});

export type zodInfer = z.infer<typeof checkoutSchema>;
