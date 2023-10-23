import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styled from 'styled-components'

const LayouContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas:
    'header'
    'content'
    'footer';

  @media (min-width: 760px) {
    grid-template-rows: 98px auto 77px;
  }
`

export function Layout() {
  return (
    <LayouContainer>
      <Header />

      <Outlet isAdmin={true} />

      <Footer />
    </LayouContainer>
  )
}
