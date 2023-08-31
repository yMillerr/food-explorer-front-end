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
import { useAuthContext } from '../../context/authContext'

import { Link } from 'react-router-dom'

export function SignIn() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const { signIn } = useAuthContext()

  function HandleSignIn() {
    signIn({
      email,
      password,
    })
  }

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
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Entrar" onClick={HandleSignIn} />

        <Link to="/register">Criar conta</Link>
      </InputContainer>
    </SignInContainer>
  )
}
