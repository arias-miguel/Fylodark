import React from 'react'
import { BtnGetStyle, CardGetStyle, CardsStyle, CCardStyle, CGPStyle, CGTStyle, CProfStyle, ImgProfStyle, InputStyle, PPStyle, ProfiCStyle } from '../styles/BodyImgStyle'

function BodyCards() {
  return (
    <CCardStyle>
        <ProfiCStyle>
            <CardsStyle>
                <PPStyle>
                Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </PPStyle>
                <CProfStyle>
                    <ImgProfStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600810/guajolotes/reto1sprint3/profile-1_cua4gt.jpg'/>
                    <div>
                        <h4>
                        Satish Patel
                        </h4>
                        <p>
                        Founder & CEO, Huddle
                        </p>
                    </div>
                </CProfStyle>
            </CardsStyle>
            <CardsStyle>
                <PPStyle>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </PPStyle>
                <CProfStyle>
                    <ImgProfStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600811/guajolotes/reto1sprint3/profile-2_iwgxzk.jpg'/>
                    <div>
                        <h4>
                        Bruce McKenzie
                        </h4>
                        <p>Founder & CEO, Huddle
                            
                        </p>
                    </div>
                </CProfStyle>
            </CardsStyle>
            <CardsStyle>
                <PPStyle>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine.
                </PPStyle>
                <CProfStyle>
                    <ImgProfStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600811/guajolotes/reto1sprint3/profile-3_kxmzhr.jpg'/>
                    <div>
                        <h4>Iva Boyd
                        </h4>
                        <p>Founder & CEO, Huddle 
                        </p>
                    </div>
                </CProfStyle>
            </CardsStyle>
        </ProfiCStyle>
        <CardGetStyle>
            <CGTStyle>Get early access today</CGTStyle>
            <CGPStyle>It only takes a minute to sign up and our 
                free starter tier is extremely generous. If 
                you have any questions, our support team 
                would be happy to help you.
            </CGPStyle>
            <div>
            <InputStyle placeholder='email@example.com'/>
            <BtnGetStyle>Get Started For Free</BtnGetStyle>
            </div>
        </CardGetStyle>
    </CCardStyle>
  )
}
export default BodyCards