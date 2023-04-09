import { CheckoutInput } from "src/features/checkout/checkout.types";
import Success from "src/components/success";

export default function Index(data: CheckoutInput) {
  return <Success {...data}/>;
}