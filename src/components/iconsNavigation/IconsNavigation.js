import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { Section3 } from "./Styled";

const IconsNavigation = () => {
    return(
        <Section3>
    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/medicine.png')} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/run.png')} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/bottle.png')} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/babycarriage.png')} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/soap.png')} />
    </TouchableOpacity>

    <TouchableOpacity>
        <Image
            source={require('../../assets/icons/mortar.png')} />
    </TouchableOpacity>
    </Section3>
    )
}

export default IconsNavigation