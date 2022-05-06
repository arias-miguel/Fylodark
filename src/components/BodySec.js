import React from 'react'
import { BodyCards, BodySecStyle, ImgIconosStyle, PeStyle } from '../styles/BodyImgStyle'

function BodySec() {
  return (
    <BodySecStyle>
        <BodyCards>
            <ImgIconosStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600811/guajolotes/reto1sprint3/icon-access-anywhere_odlch7.svg'/>
            <h2>Access your files, anywhere</h2>
            <PeStyle>The ability to use a smartphone, tablet, or 
                computer to access your account means your 
                files follow you everywhere.
            </PeStyle>
        </BodyCards>
        <BodyCards>
            <ImgIconosStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600813/guajolotes/reto1sprint3/icon-security_qwb7yh.svg'/>
            <h2>Security you can trust</h2>
            <PeStyle>2-factor authentication and user-controlled 
                encryption are just a couple of the security 
                features we allow to help secure your files.
            </PeStyle>
        </BodyCards>
        <BodyCards>
            <ImgIconosStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600812/guajolotes/reto1sprint3/icon-collaboration_ziiphv.svg'/>
            <h2>Real-time collaboration</h2>
            <PeStyle>Securely share files and folders with friends, 
                family and colleagues for live collaboration. No 
                email attachments required.
            </PeStyle>
        </BodyCards>
        <BodyCards>
            <ImgIconosStyle src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1651600811/guajolotes/reto1sprint3/icon-any-file_iepj16.svg'/>
            <h2>Store any type of file</h2>
            <PeStyle>Whether you're sharing holidays photos or work 
                documents, Fylo has you covered allowing for all 
                file types to be securely stored and shared.
            </PeStyle>
        </BodyCards>
    </BodySecStyle>
  )
}

export default BodySec