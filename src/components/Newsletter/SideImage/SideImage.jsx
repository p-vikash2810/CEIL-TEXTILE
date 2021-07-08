import React from 'react'
import { SideImageContainer, Image } from "./SideImage.styles"
import second from "../../../Images/Second.jpeg"

const SideImage = () => {
    return (
        <SideImageContainer>
            <Image>
                <img src={second} alt="building" />
            </Image>
        </SideImageContainer>
    )
}

export default SideImage
