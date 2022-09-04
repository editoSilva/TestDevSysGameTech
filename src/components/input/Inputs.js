import React from "react";
import { Container, Imagem1, Imagem2 , Input } from "./styled";
import {  } from "react-native";

const Inputs = () => {
    return (
        <Container>
            
            <Input
                placeholder='                    Insira seu email' />
                <Imagem1
                source={require('../../assets/icons/mail.png')}
                />
            <Input
                placeholder='                    **************'
                secureTextEntry={true} />
                <Imagem2
                source={require('../../assets/icons/lock.png')}
            />
        </Container>
    )
}

export default Inputs