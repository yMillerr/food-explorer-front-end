import { Link } from 'react-router-dom'

import { Form, InputWrapper, LogoContainer, SignInContainer } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import logoFoodExplorer from '../../assets/logo/logo-foodExplorer.png'

import { useAuthContext } from '../../context/AuthContext'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const signInValidationSchema = z.object({
  email: z
    .string()
    .min(1, 'Você precisa inserir seu Email')
    .email('Insira um Email válido'),
  password: z.string().min(6, 'Sua senha deve ter minímo 6 caracteres!'),
})

export function SignIn() {
  const { signIn } = useAuthContext()

  async function handleSignIn(event) {
    const { email, password } = event

    await signIn({
      email,
      password,
    })
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInValidationSchema),
  })

  return (
    <SignInContainer>
      <LogoContainer>
        <img src={logoFoodExplorer} alt="" />

        <h2>Food explorer</h2>
      </LogoContainer>

      <Form onSubmit={handleSubmit(handleSignIn)} autoComplete="off">
        <h3>Faça Login</h3>

        <InputWrapper>
          <label>Email</label>

          <Input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            {...register('email')}
            errors={errors}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Senha</label>

          <Input
            type="password"
            placeholder="No mínimo 6 caracteres"
            {...register('password')}
            errors={errors}
          />
        </InputWrapper>

        <Button
          title="Entrar"
          type="submit"
          disabled={Object.keys(errors).length > 0 || isSubmitting}
        />

        <Link to="/register">Criar conta</Link>
      </Form>
    </SignInContainer>
  )
}
