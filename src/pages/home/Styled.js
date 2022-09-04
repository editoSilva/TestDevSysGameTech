import styled from "styled-components/native";

export const Page = styled.SafeAreaView`
    flex: 1; 
    
`

export const Section1 = styled.View`
    align-items: center;
    justify-content: center;
`


export const CardsContainer = styled.ScrollView`
    
    height: 0px;
`
export const MiniCardsContainer = styled.ScrollView`
    margin-top: 20px;
    height: 0px;
    
`
export const Cards = styled.Image`
    margin-left: 3px;
    margin-right: 3px;
    width: 400px;
    height: 150px;
`

export const MiniCards = styled.Image`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    height:70px;
    width: 90px;
    
`

export const Section4 = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 40px;
`

export const Texto = styled.Text`
    font-size: 17px;
`