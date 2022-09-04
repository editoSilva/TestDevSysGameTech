import React from 'react';
import LottieView from 'lottie-react-native';

import { Logo, Page, Texto } from './Styled';


const Loading = () => {
    return(
        <Page>
        <LottieView
      source={require('../../assets/loading-circle.json')}
      style={{width: 100, height: 100 }}
      autoPlay
      loop
    /> 
    <Texto>Carregando...</Texto>

    
    <Logo
    source={require('../../assets/image/LogoAFARMA.png')}
    />
    
    
    </Page>
    )
}

export default Loading