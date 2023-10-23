import { NewContainer } from './styles'

import { Form } from './components/Form'

import { IconArrowLeft } from '../../assets/icons'

import { Link, useNavigate } from 'react-router-dom'

export function New() {
  const navigate = useNavigate()

  function handleBackToHome() {
    localStorage.removeItem('@foodexplorer:ingredients')

    return navigate(-1)
  }

  return (
    <NewContainer>
      <main>
        <Link onClick={handleBackToHome}>
          <IconArrowLeft size={14} />
          voltar
        </Link>

        <h2>Novo Prato</h2>

        <Form />
      </main>
    </NewContainer>
  )
}
