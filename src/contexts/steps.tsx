import { zodInfer } from "../features/checkout/schema";
import React, { createContext, useContext, useState } from "react";

interface StepFormContext {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      customer: {
        name: string;
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
    } | null>
  >;
  formData: {
    customer: {
      name: string;
      address: {
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
      };
      email: string;
      lastname: string;
    };
    card: {
      number: string;
      cvc: string;
      expDate: string;
      nameOnCard: string;
    };
  } | null;
}

interface StepFormProviderProps {
  children: React.ReactNode;
}

const StepFormContext = createContext<StepFormContext>({} as StepFormContext);

export const StepFormProvider = ({ children }: StepFormProviderProps) => {
  const [currentStep, setStep] = useState(0);
  const [formData, setFormData] = useState<zodInfer | null>(null);

  return (
    <StepFormContext.Provider
      value={{
        currentStep,
        setStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </StepFormContext.Provider>
  );
};

export function useStepFormContext() {
  const context = useContext(StepFormContext);
  return context;
}
