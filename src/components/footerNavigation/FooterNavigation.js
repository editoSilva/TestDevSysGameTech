import React from "react";
import { Navigation } from "./Styled";
import { Image, TouchableOpacity } from "react-native";

const FooterNavigation = () => {
    return(
        <Navigation>
            <TouchableOpacity>
                <Image
             source={require('../../assets/icons/person.png')}/>
                
             </TouchableOpacity>
            
            <TouchableOpacity><Image
             source={require('../../assets/icons/house.png')}/></TouchableOpacity>
            
            <TouchableOpacity><Image
             source={require('../../assets/icons/handbag.png')}/></TouchableOpacity>
             
            <TouchableOpacity><Image
             source={require('../../assets/icons/settings.png')}/></TouchableOpacity>
             
        </Navigation>
    );
}

export default FooterNavigation;