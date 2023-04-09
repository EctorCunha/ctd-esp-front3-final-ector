import * as Yup from "yup";

// Fazer validações com checkout.route.ts

export const userSchema = Yup.object().shape({
    firstname: Yup.string().required("Campo obrigatório"),
    lastname: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Formato invalido").required("Campo obrigatório"),
    address1: Yup.string().required("Campo obrigatório"),
    address2: Yup.string(),
    city: Yup.string().required("Campo obrigatório"),
    state: Yup.string().required("Campo obrigatório"),
    zipCode: Yup.string().required("Campo obrigatório"),
});


export const cartSchema = Yup.object().shape({
    nameOnCard:Yup.string().required("Campo obrigatório"),
    number: Yup.string().required("Campo obrigatório"),
    expDate:Yup.string().required("Campo obrigatório"),
    cvc: Yup.string().required("Campo obrigatório"),
});

