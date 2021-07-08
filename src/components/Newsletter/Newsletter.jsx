import React from 'react'
import { CardContainer } from "./NewsLetter.styles"
import SideImage from './SideImage/SideImage'
import Details from './Details/Details'
const Newsletter = () => {
    return (
        <CardContainer>
            <Details />
            <SideImage />
        </CardContainer>
    )
}

export default Newsletter
