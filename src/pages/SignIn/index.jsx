import { useState } from 'react'

import {
  InputContainer,
  InputWrapper,
  LogoContainer,
  SignInContainer,
} from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import logoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'

// import { api } from '../../configs/axios'

export function SignIn() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <SignInContainer>
      <LogoContainer>
        <img src={logoFoodExplorer} alt="" />

        <h2>Food explorer</h2>
      </LogoContainer>

      <InputContainer>
        <h3>Faça Login</h3>

        <InputWrapper>
          <label>Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Entrar" />

        <a>Criar conta</a>
      </InputContainer>
    </SignInContainer>
  )
}
