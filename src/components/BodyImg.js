import React from 'react'
import { BodyImgMStyle,BGImgStyle , BodyStyle, ContenTeStyle, PStyle, TitleStyle, BtnStyle, BtnCStyle } from '../styles/BodyImgStyle'

const BodyImg = () => {
  return (
    <BodyStyle>
        <ContenTeStyle>
            <BodyImgMStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600813/guajolotes/reto1sprint3/illustration-intro_fx7jbb.png'/>
            <BGImgStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600810/guajolotes/reto1sprint3/bg-curvy-mobile_jtqc2n.svg'/>
            <BtnCStyle>
            <TitleStyle>All your files in one secure location, 
                accessible anywhere.
            </TitleStyle>
            <PStyle>
                Fylo stores all your most important files in one secure location. 
                Access them wherever you need, share and collaborate with 
                friends family, and co-workers.
            </PStyle>
            
            <BtnStyle>Get Started</BtnStyle>
            </BtnCStyle>
        </ContenTeStyle>
    </BodyStyle>
  )
}

export default BodyImg