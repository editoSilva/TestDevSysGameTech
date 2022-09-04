import React from "react";
import { Button, Texto, Container } from './Styled'

const Buttons = ({name, cor, border}) => {
  return (
    <Container>

      <Button
      cor={cor}
      border={border}
      >
        <Texto>{name}</Texto>
      </Button>

    </Container>

  )
}

export default Buttons