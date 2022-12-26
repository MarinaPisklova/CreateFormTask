import styled from "styled-components";
import { Flex } from "../../styles";

export const ContentBox = styled(Flex)`
  width: 700px;
  margin: 0 auto;
  background: linear-gradient(180deg, ${props => props.theme.colors.white} 0%, ${props => props.theme.colors.shadow} 100%);
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
`

