import styled from "styled-components";

interface IFlex {
  fd?: string,
  ai?: string,
  jc?: string,
  gap?: string
}

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${props => props.fd || "row"};
  align-items: ${props => props.ai || "center"};
  justify-content: ${props => props.jc || "center"};
  gap: ${props => props.gap || "0px"};
`

export const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  color: ${props => props.theme.colors.titleColor};
`