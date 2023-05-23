//  IMG's
import PatternIMG from './img/bg-pattern.webp'
import LogoIMG from './img/logo-cryptos.webp'

// Components
import { Background, Pattern, Logo, Container, Title, Header, Footer } from './components/styled/styledComponents'
import Form from './components/Form'

function App () {
  const year = new Date().getFullYear()
  return (
    <Background>
      <Pattern src={PatternIMG} />
      <Logo src={LogoIMG} />
      <Container>
        <Header>
          <lord-icon
            src='https://cdn.lordicon.com/vaeagfzc.json'
            trigger='loop'
            delay='3000'
            colors='primary:#0D2235,secondary:#4189b9'
            style={{ width: 120, height: 120 }}
          />
          <Title>Check cryptocoins <span>values</span> instantly</Title>
        </Header>
        <Form />
      </Container>
      <Footer>
        <p>A website crafted with passion by SenpuDev - {year}</p>
      </Footer>
    </Background>
  )
}

export default App
