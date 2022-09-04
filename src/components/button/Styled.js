import styled from "styled-components/native"

export const Button = styled.TouchableOpacity`
width: 321px;
height: 52px;
margin-top: 12px;
border: ${props => props.border};
border-radius: 6px;
align-items: center;
justify-content: center;
background-color: ${props => props.cor};
`

export const Texto = styled.Text`
  color: #fff;
`
export const Container = styled.View`
  align-items: center;
  margin-bottom:0;
`
