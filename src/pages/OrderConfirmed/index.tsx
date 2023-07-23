import { MapPin } from "phosphor-react";
import { useTheme } from "styled-components";

import { RegularText, TitleText } from "../../components/Typography";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";

import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";

export function OrderConfirmedPage() {
  const { colors } = useTheme()
  return (
    <OrderConfirmedContainer className="container">
      <TitleText size="l" >Uhu! Pedido confirmado</TitleText>
      <RegularText size="l" color="subtitle" >Agora é só aguardar que logo o café chegará até você</RegularText>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel, 102 </strong>
                <br />
                Central - São Paulo, SP
              </RegularText>
            }
          />

          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon 
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </OrderConfirmedContainer>
  )
}