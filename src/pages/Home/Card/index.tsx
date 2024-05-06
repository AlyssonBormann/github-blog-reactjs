import { dateFormatter } from '../../../utils/formatted'
import { ContainerCard } from './styles'

interface Issue {
  id: string
  title: string
  body: string
  created_at: string
  number: string
}

interface IssueProps {
  issue: Issue
}

export function Card({ issue }: IssueProps) {
  return (
    <ContainerCard to={`/${issue.number}`}>
      <header>
        <h1>{issue.title}</h1>
        <span>{dateFormatter.format(new Date(issue.created_at))}</span>
      </header>
      <main>
        <p>{issue.body}</p>
      </main>
    </ContainerCard>
  )
}
