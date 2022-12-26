import styled from "styled-components"
import { Flex } from "../../../styles"

export const StyledFlex = styled(Flex)`
  margin-bottom: 19px;
`

export const CopyButton = styled.button`
  text-decoration: underline;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.titleColor};
  cursor: pointer;
`