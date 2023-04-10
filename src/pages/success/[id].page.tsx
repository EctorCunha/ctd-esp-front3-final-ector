import { CheckoutInput } from "../../features/checkout/checkout.types";
import Success from "../../components/success";

export default function Index(data: CheckoutInput) {
  return <Success {...data}/>;
}