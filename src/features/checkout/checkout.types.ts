export type CheckoutInput = {
  map?: any;
  customer: {
    firstname: string;
    lastname: string;
    email: string;
    address: {
      address1: string;
      address2: string | null;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  card: {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  };
  order: {
    name: string;
    image: string;
    price: number;
  };
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
