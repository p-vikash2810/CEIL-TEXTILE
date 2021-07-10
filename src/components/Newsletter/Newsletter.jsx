import React from 'react'
import { CardContainer } from "./NewsLetter.styles"
import SideImage from './SideImage/SideImage'
import Details from './Details/Details'
const Newsletter = ({fashionObjOne}) => {
    return (
        <CardContainer>
            <Details fashionObjOne={fashionObjOne}/>
            <SideImage />
        </CardContainer>
    )
}

export default Newsletter
