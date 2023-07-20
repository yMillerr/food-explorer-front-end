import {
  InputContainer,
  InputWrapper,
  LogoContainer,
  SignUpContainer,
} from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import logoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'
import { useState } from 'react'

export function SignUp() {
  return (
    <SignUpContainer>
      <LogoContainer>
        <img src={logoFoodExplorer} alt="" />

        <h2>Food explorer</h2>
      </LogoContainer>

      <InputContainer>
        <h3>Crie sua conta</h3>

        <InputWrapper>
          <label>Seu nome</label>
          <Input placeholder="Exemplo: Maria da Silva" />
        </InputWrapper>

        <InputWrapper>
          <label>Email</label>
          <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
        </InputWrapper>

        <InputWrapper>
          <label>Senha</label>
          <Input placeholder="No mínimo 6 caracteres" type="password" />
        </InputWrapper>

        <Button title="Entrar" />

        <a>Criar conta</a>
      </InputContainer>
    </SignUpContainer>
  )
}
