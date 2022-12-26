import styled from "styled-components"

export const StyledSpan = styled.span<{ active?: boolean }>`
  color: ${props => props.active ? props.theme.colors.titleColor : props.theme.colors.gray};
  opacity: 0.8;
`
export const StyledBox = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 14px;
`