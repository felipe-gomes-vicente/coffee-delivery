import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

import { ContentContainer, PaymentMethodContainer } from "./styles";

export type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
})