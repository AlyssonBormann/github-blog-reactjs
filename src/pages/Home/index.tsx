import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { IssueContext } from '../../contexts/IssuesContext'
import { Card } from './Card'
import { PersonInfo } from './PersonInfo'
import { HomeContainer, HomeContent, ListIssues, SearchIssues } from './styles'

const searchIssuesFormSchema = z.object({
  query: z.string(),
})

type SearchIssuesFormInputs = z.infer<typeof searchIssuesFormSchema>

export function Home() {
  const { issues, fetchIssues } = useContext(IssueContext)
  const totalIssues = issues.length

  const { register } = useForm<SearchIssuesFormInputs>({
    resolver: zodResolver(searchIssuesFormSchema),
  })
  async function handleSearchIssues(query: string | null) {
    await fetchIssues(query)
  }
  return (
    <HomeContainer>
      <PersonInfo />
      <HomeContent>
        <SearchIssues>
          <div>
            <span>Publicações</span>
            <small>
              {totalIssues} Publica{totalIssues === 0 ? 'ção' : 'ções'}
            </small>
          </div>
          <input
            type="text"
            {...register('query')}
            placeholder="Buscar contéudo (Pressione Enter)"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearchIssues(e.currentTarget.value)
              }
            }}
          />
        </SearchIssues>
        <ListIssues>
          {issues.map((issue) => {
            return <Card key={issue.id} issue={issue} />
          })}
        </ListIssues>
      </HomeContent>
    </HomeContainer>
  )
}
