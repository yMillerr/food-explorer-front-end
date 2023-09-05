import { SectionContainer } from './styles'

export function Section({ children, title }) {
  return (
    <SectionContainer>
      <h4>{title}</h4>
      {children}
    </SectionContainer>
  )
}
