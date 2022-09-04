import React from "react";
import { ButonText, Section, Texto } from "./Styled";


const ButtonText = (props) => {
    return(
        <Section>
            <ButonText>  
                <Texto>{props.name}</Texto>
            </ButonText>
        </Section>
    )
}

export default ButtonText