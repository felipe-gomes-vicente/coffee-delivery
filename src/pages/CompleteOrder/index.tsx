import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { CompleteOrderContainer } from "./styles";

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string()
})

export function CompleteOrderPage() {
  const confirmOrderForm = useForm({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  });
  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer className="container" >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}