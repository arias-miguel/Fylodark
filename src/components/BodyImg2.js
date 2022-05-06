import React from 'react'
import { BodyImgM2Style, ContenStyle, H2Style, ImgLinkStyle, LinkPStyle, LinkStyle, PeStyle } from '../styles/BodyImgStyle'

const BodyImg2 = () => {
  return (
    <ContenStyle>
        <BodyImgM2Style src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600810/guajolotes/reto1sprint3/illustration-stay-productive_eqwufp.png'/>
        <div>
          <H2Style>Stay productive, wherever you are</H2Style>
          <PeStyle>Never let location be an issue when accessing 
              your files. Fylo has you covered for all of your file 
              storage needs.
          </PeStyle>
          <PeStyle>Securely share files and folders with friends, 
              family and colleagues for live collaboration. No 
              email attachments required.
          </PeStyle>
          <LinkStyle>
              <LinkPStyle>See how Fylo works</LinkPStyle>
              <ImgLinkStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600811/guajolotes/reto1sprint3/icon-arrow_scpe60.svg'/>
          </LinkStyle>
        </div> 
    </ContenStyle>
  )
}
export default BodyImg2