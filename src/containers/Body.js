import React from 'react'
import BodyCards from '../components/BodyCards'
import BodyImg from '../components/BodyImg'
import BodyImg2 from '../components/BodyImg2'
import BodySec from '../components/BodySec'

const Body = () => {
  return (
    <>
     <BodyImg />
     <BodySec /> 
     <div style={{backgroundColor:'#181e2a'}}> 
     <BodyImg2 /> 
     <BodyCards />
     </div> 
    </>
  )
}

export default Body