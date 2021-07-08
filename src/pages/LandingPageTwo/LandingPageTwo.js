import React from 'react'
import { fashionObjOne, fashionObjTwo } from './Data'
import FashionSection from '../../components/FashionSection/FashionSection'

const LandingPageTwo = () => {
    return (
        <div>
            {/* <FashionSection {...fashionObjOne}/> */}
            <FashionSection {...fashionObjTwo} />
        </div>
    )
}

export default LandingPageTwo
