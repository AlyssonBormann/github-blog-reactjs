import { PersonInfo } from './PersonInfo'
import { HomeContainer, HomeContent } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <HomeContent></HomeContent>
    </HomeContainer>
  )
}
