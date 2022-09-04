import React from "react";
import { Imagem, Logo, Page, Texto } from "./Styled";


import Inputs from "../../components/input/Inputs";
import Buttons from "../../components/button/Buttons";
import ButtonText from "../../components/buttonText/ButtonText";



const Login = () => {

  return (
    <Page>

        <Imagem
        source={require('../../assets/image/background.png')}
      />

        <Texto>No conforto do seu lar,
        com o menor preço ! </Texto>
      
      

      <Inputs/>
    
    
      <ButtonText
        name='esqueceu a senha?'
      />

      <Buttons
        name='LOGIN'
        cor='#34B6A5'
        border='none'
      />

      <Buttons
        name='CADASTRAR'
        border='2px solid #fff'
      />

      <Logo
        source={require('../../assets/image/LogoAFARMA.png')}
      />
    </Page>
  )
}

export default Login
