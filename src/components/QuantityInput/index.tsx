import { Minus, Plus } from "phosphor-react";

import { QuantityInputContainer, IconWrapper } from "./styles";

export function QuantityInput() {
  return (
    <QuantityInputContainer >
      <IconWrapper>
        <Minus size={24} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={24} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}