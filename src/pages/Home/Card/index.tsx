import { ContainerCard } from './styles'

export function Card() {
  return (
    <ContainerCard to={``}>
      <header>
        <h1>TITULO</h1>
        <span>DATA</span>
      </header>
      <main>
        <p>TEXTO</p>
      </main>
    </ContainerCard>
  )
}
