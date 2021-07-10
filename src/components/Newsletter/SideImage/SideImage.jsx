import React from 'react'
import { SideImageContainer, Image } from "./SideImage.styles"
// import second from "../../../Images/Second.jpeg"

const SideImage = () => {
    return (
        <SideImageContainer style={{height: "auto"}}>
            <Image>
                <img src="https://ik.imagekit.io/vikashGallery/sunnyInternational/tr:w-600/Second.jpeg" alt="building" />
            </Image>
        </SideImageContainer>
    )
}

export default SideImage
