import { observer } from 'mobx-react-lite';
import * as React from 'react';
import appStore from '../../../core/store/appStore';
import store from '../../../core/store/OrderItemsStore';
import Cart from '../../UI/Icons/Cart/Cart';
import Logo from '../../UI/Icons/Logo/Logo';
import { StyledHeader, Container, FlexBox, CartName, CartSvg, Line } from './styles';

const Header = observer(() => {
  let successActive = appStore.state.success.active;

  return (
    <StyledHeader>
      <Container>
        <Logo/>
        <FlexBox>
          <CartName>cart</CartName>
          <CartSvg success={successActive} data-n={store.orderItems.length}>
            <Cart/>
          </CartSvg>
        </FlexBox>
      </Container>
      <Line />
    </StyledHeader>
  )
})

export default Header;