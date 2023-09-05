import { ButtonLinkContainer } from './styles'

export function ButtonLink({ title, ...rest }) {
  return <ButtonLinkContainer {...rest}>{title}</ButtonLinkContainer>
}
