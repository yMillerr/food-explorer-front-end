import { ButtonLinkContainer } from './styles'

export function ButtonLink({ title, icon: Icon, ...rest }) {
  return (
    <ButtonLinkContainer {...rest}>
      {Icon && <Icon />}
      {title}
    </ButtonLinkContainer>
  )
}
