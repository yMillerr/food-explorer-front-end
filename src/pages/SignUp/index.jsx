import { Form, InputWrapper, LogoContainer, SignUpContainer } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import logoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'

import { useNavigate, Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const signUpFormValidation = z.object({
  email: z
    .string()
    .min(1, 'Você precisa inserir seu Email')
    .email('Insira um Email válido'),
  password: z.string().min(6, 'Sua senha deve ter minímo 6 caracteres!'),
  name: z.string().min(1, 'Você precisa inserir um nome'),
})

export function SignUp() {
  const { signUp } = useAuthContext()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpFormValidation),
  })

  const navigate = useNavigate()

  function handleSignUp(event) {
    const { name, email, password } = event

    signUp({ name, email, password }).then(() => navigate(-1))
  }

  return (
    <SignUpContainer>
      <LogoContainer>
        <img src={logoFoodExplorer} alt="" />

        <h2>Food explorer</h2>
      </LogoContainer>

      <Form onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
        <h3>Crie sua conta</h3>

        <InputWrapper>
          <label>Seu nome</label>
          <Input
            placeholder="Exemplo: Maria da Silva"
            {...register('name')}
            type="text"
            errors={errors}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Email</label>

          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            {...register('email')}
            errors={errors}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Senha</label>
          <Input
            placeholder="No mínimo 6 caracteres"
            type="password"
            errors={errors}
            {...register('password')}
          />
        </InputWrapper>

        <Button
          title="Criar"
          type="submit"
          disabled={Object.keys(errors).length > 0 || isSubmitting}
        />

        <Link to="/">Fazer login</Link>
      </Form>
    </SignUpContainer>
  )
}
