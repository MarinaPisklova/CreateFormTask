import * as React from 'react';
import styled from 'styled-components';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const FormBox = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, #FFFFFF 0%, #FEFEFE 100%);
box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.07);
border-radius: 5px;
`

function FormPage(){
  return (
    <FormBox>
      <form>
        <input type="text" />
      </form>
      <OrderSummary/>
    </FormBox>
  )
}

export default FormPage;