import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
  DropdownDivider,
  Label,
} from 'semantic-ui-react'
import { cartItems } from '../store/initialValues/cartItems'
export default function CartSummary() {

  const { cartItems } = useSelector(state => state.cart)
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <DropdownMenu>
          {
            cartItems.map((cartItems)=>(
              <DropdownItem>
                {cartItems.product.productName}
                <Label>
                {cartItems.quantity}
                </Label>
              </DropdownItem>
            ))
          }
          <DropdownDivider />
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
