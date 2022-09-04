import React from "react";
import {Image} from "react-native";
import FooterNavigation from "../../components/footerNavigation/FooterNavigation";

import IconsNavigation from "../../components/iconsNavigation/IconsNavigation";
import InputSearch from "../../components/inputSearch/InputSearch";

import { Cards, CardsContainer, MiniCards, MiniCardsContainer, Page, Section1, Section4, Texto } from "./Styled";



const Home = () => {
    return (
        <Page>

            <Section1>
                <Image
                    source={require('../../assets/image/prancheta.png')} />
            </Section1>

           <InputSearch />

            <IconsNavigation/>

            <CardsContainer horizontal={true}>
                <Cards
                    source={require('../../assets/image/card1.png')}
                />
                <Cards
                    source={require('../../assets/image/card2.png')}
                />
                <Cards
                    source={require('../../assets/image/card3.png')}
                />

            </CardsContainer>

            <Section4>
                <Image
                    source={require('../../assets/icons/pills.png')}
                />
                <Texto>Aqui você encontra as Melhores Famácias!</Texto>
            </Section4>


            <MiniCardsContainer horizontal={true}>
                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>
                    
                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>

                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>

                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>

                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>

                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>

                <MiniCards
                    source={require('../../assets/image/minicard.png')}/>
                
            </MiniCardsContainer>

            <FooterNavigation/>   
        </Page>
    )
}

export default Home