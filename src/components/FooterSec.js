import React from 'react'
import { ConContImgStyle, ContImgStyle, DivAboStyle, DivIconStyle, FooIconoStyle, FooImgStyle, FooIStyle, FooPStyle, FooterStyle, FootIcStyle } from '../styles/BodyImgStyle'

const FooterSec = () => {
  return (
    <FooterStyle>
        <FooIStyle>
          <FooImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600810/guajolotes/reto1sprint3/logo_ayhjla.svg'/>
          <ContImgStyle>
            <FooIconoStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600812/guajolotes/reto1sprint3/icon-location_g3tibd.svg'/>
            <FooPStyle>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore 
              et dolore magna aliqua
            </FooPStyle>
          </ContImgStyle>
        </FooIStyle>
        <ConContImgStyle>
          <ContImgStyle>
            <FooImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600813/guajolotes/reto1sprint3/icon-phone_sekiry.svg'/>
            <p>+1-543-123-4567</p>
          </ContImgStyle>
          <ContImgStyle>
              <FooImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600812/guajolotes/reto1sprint3/icon-email_kmnjy7.svg'/>
              <p>example@fylo.com</p>
          </ContImgStyle>
        </ConContImgStyle>
        <DivAboStyle>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </DivAboStyle>
        <DivAboStyle>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>
        </DivAboStyle>
        <DivIconStyle>
          <FootIcStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651820293/samples/workShop/icon_dqlm8v.png'/>
        </DivIconStyle>
    </FooterStyle>
  )
}

export default FooterSec