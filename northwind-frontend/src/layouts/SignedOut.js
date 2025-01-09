import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <div>
        <MenuItem>
            <Button onClick={props.signIn} primary>Giriş Yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
        </MenuItem>
    </div>
  )
}
