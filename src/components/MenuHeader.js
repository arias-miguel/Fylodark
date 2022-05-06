import React from 'react'
import { MenuHItemsStyle, MenuImgStyle, MenuNavStyle, MenuStyle, MenuUlStyle } from '../styles/MenuHStyle'

const MenuHeader = () => {
  return (
    <MenuStyle>
        <MenuImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600810/guajolotes/reto1sprint3/logo_ayhjla.svg'/>
        <MenuNavStyle>
            <MenuUlStyle>
                <MenuHItemsStyle>Features</MenuHItemsStyle>
                <MenuHItemsStyle>Team</MenuHItemsStyle>
                <MenuHItemsStyle>Sign in</MenuHItemsStyle>
            </MenuUlStyle>
        </MenuNavStyle>
    </MenuStyle>
  )
}

export default MenuHeader