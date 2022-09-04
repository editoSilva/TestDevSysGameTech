import React, {useState} from "react";

import styled from "styled-components/native";


import Login from "./pages/login/Login";
import Loading from "./pages/loading/Loading";
import Home from "./pages/home/Home";

const Page = styled.SafeAreaView`
  flex: 1;
`


export default () => {
  return (
   
    <Page>
      <Loading/>
    </Page>

  )
}