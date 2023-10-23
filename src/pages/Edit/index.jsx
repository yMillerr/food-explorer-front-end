import { Link, useNavigate } from 'react-router-dom'

import { NewContainer } from './styles'
import { Form } from './components/Form'

import { IconArrowLeft } from '../../assets/icons'

export function Edit() {
  const navigate = useNavigate()

  function handleBackToHome() {
    navigate(-1)

    localStorage.removeItem('@foodexplorer:ingredients')
    localStorage.removeItem('@foodexplorer:product')
  }

  return (
    <NewContainer>
      <main>
        <Link onClick={handleBackToHome}>
          <IconArrowLeft size={14} />
          voltar
        </Link>

        <h2>Editar prato</h2>

        <Form />
      </main>
    </NewContainer>
  )
}
