import React from 'react';

import { FormStyled, DivEmail, DivPassword } from './styled';

export default function Form() {
  return (
    <FormStyled>
      <DivEmail>
        <span>Email:</span>
        <input type="text" />
      </DivEmail>
      <DivPassword>
        <span>Senha:</span>
        <input type="password" />
      </DivPassword>
      <small>Esqueci minha senha</small>
      <button type="submit">Entrar</button>
    </FormStyled>
  );
}
