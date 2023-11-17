import { Outlet } from 'react-router-dom'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import styled from 'styled-components'

const LayouContainer = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  overflow-x: hidden;
  @media (min-width: 760px) {
    grid-template-rows: 98px auto 77px;
  }
`

export function Layout() {
  return (
    <LayouContainer>
      <Header />

      <Outlet />

      <Footer />
    </LayouContainer>
  )
}
