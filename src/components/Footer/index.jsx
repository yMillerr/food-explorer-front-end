import { FooterContainer, LogoContainer } from './styles'
import LogoFoodExplorer from '../../assets/logo/logo-foodExplorer-footer.png'

export function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={LogoFoodExplorer} alt="" />
        <h3>food explorer</h3>
      </LogoContainer>

      <span>© 2023 - Todos os direitos reservados.</span>
    </FooterContainer>
  )
}
