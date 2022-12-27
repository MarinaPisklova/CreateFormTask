import styled from "styled-components"

export const SubTotalInfo = styled.div`
  padding: 0 9px 0 5px;
  margin-bottom: 14px;
  color: #777879;

  & span{
    font-size: 12px;
    line-height: 11px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`

export const TotalInfo = styled.div`
  padding: 0 9px 0 5px;
  margin-bottom: 14px;
  color: #431C5D;

  & span{
    font-size: 12px;
    line-height: 13px;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-bottom: 11px;
  background-color: rgba(151, 151, 151, 0.2);
`