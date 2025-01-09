import React from 'react'
import { Dropdown, DropdownItem, DropdownMenu, Image, MenuItem } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
      <MenuItem>
        <Image avatar spaced="right" src=""/>
        <Dropdown pointing="top right" text="Emre">
            <DropdownMenu>
                <DropdownItem text="Bilgilerim" icon="info"/>
                <DropdownItem onClick={props.signOut} text="Çıkış Yap" icon="sign-out"/>
            </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </div>
  )
}
