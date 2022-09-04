import React from "react";
import { Section2, Search, SearchIcon } from "./Styled";
import { TouchableOpacity, Image } from "react-native";

const InputSearch = () => {
    return(
        <Section2>
                <SearchIcon
                    source={require('../../assets/icons/search.png')} />

                <Search
                    
                    placeholder='            procurar produto..'/>

                <TouchableOpacity>
                    <Image
                        source={require('../../assets/icons/heart.png')} />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image
                        source={require('../../assets/icons/notification.png')} />
                </TouchableOpacity>

            </Section2>
    )
}

export default InputSearch