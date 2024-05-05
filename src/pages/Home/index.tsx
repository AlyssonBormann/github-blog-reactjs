import { KeyboardEvent } from 'react'
import { Card } from './Card'
import { PersonInfo } from './PersonInfo'
import { HomeContainer, HomeContent, ListIssues, SearchIssues } from './styles'

export function Home() {
  // %20 e o espaco
  // https://api.github.com/repos/AlyssonBormann/github-blog-reactjs/issues
  function handlePressEnter(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      console.log('teste')
    }
  }
  return (
    <HomeContainer>
      <PersonInfo></PersonInfo>
      <HomeContent>
        <SearchIssues>
          <div>
            <span>Publicações</span>
            <small>23 Publicacao </small>
          </div>
          <input
            type="text"
            placeholder="Buscar contéudo (Pressione Enter)"
            onKeyDown={(e) => {
              handlePressEnter(e)
            }}
          />
        </SearchIssues>
        <ListIssues>
          <Card />
          <Card />
          <Card />
          <Card />
        </ListIssues>
      </HomeContent>
    </HomeContainer>
  )
}
