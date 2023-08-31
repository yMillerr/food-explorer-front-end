import { useState } from 'react'

import {
  InputContainer,
  InputWrapper,
  LogoContainer,
  SignUpContainer,
} from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import logoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'

import { api } from '../../utils/axios'
import { useNavigate, Link } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  async function handleSignUp() {
    try {
      if (!name) {
        return alert('O nome é obrigatório!')
      }

      if (!password) {
        return alert('A senha é obrigatório!')
      }

      if (!email) {
        return alert('O email é obrigatório')
      }

      await api.post('/users', {
        name,
        email,
        password,
      })

      navigate('/')
      return alert('Usuário registardo com sucesso!')
    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Não foi possivel realizar o login')
      }
    }
  }

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
          <Input
            placeholder="Exemplo: Maria da Silva"
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Email</label>
          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button title="Criar" onClick={handleSignUp} />

        <Link to="/">Fazer login</Link>
      </InputContainer>
    </SignUpContainer>
  )
}
