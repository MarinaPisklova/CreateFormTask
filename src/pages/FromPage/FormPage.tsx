import React, { FC } from 'react';
import FormBox from '../../components/smart/FormBox/FormBox';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import { ContentBox } from './styles';

const FormPage: FC = () => {
  return (
    <ContentBox jc="space-between" ai="stretch">
      <FormBox />
      <OrderSummary />
    </ContentBox>
  )
}

export default FormPage;