import React, { useState } from 'react'
import CartSummary from './CartSummary'
import {
    DropdownMenu,
    DropdownItem,
    MenuMenu,
    MenuItem,
    Button,
    Dropdown,
    Menu,
    Container,
} from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navi() {
    const { cartItems } = useSelector(state => state.cart)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const history = useNavigate()
    function handleSignOut(params) {
        setisAuthenticated(false)
        history("/")
    }

    function handleSignIn(params) {
        setisAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem
                        name='home'
                    />
                    <MenuItem
                        name='messages'
                    />
                    <MenuMenu position='right'>
                        {cartItems.length>0&&<CartSummary/>}
                        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}     
                    </MenuMenu>
                </Container>
            </Menu>
        </div>
    )
}
