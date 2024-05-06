import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { api } from '../../../lib/axios'
import { Container, Content, DetailMain, NavButton } from './styles'

interface IssueDetail {
  title: string
  comments: number
  createdAt: string
  githubUsername: string
  url: string
  body: string
}

export function CardDetail() {
  const { id } = useParams()
  const [issueDetail, setIssueDetail] = useState<IssueDetail>({} as IssueDetail)

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `/repos/AlyssonBormann/github-blog-reactjs/issues/${id}`,
    )

    const {
      title,
      comments,
      created_at: createdAt,
      user,
      html_url: htmlUrl,
      body,
    } = response.data

    const issue = {
      title,
      githubUsername: user.login,
      comments,
      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      }),
      url: htmlUrl,
      body,
    }

    setIssueDetail(issue)
  }, [id])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <Container>
      <Content>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </NavButton>
          <a href={issueDetail.url} target="_blank" rel="noreferrer">
            Ver no Github
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </header>
        <div>
          <h1>{issueDetail.title}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-brands fa-github"></i>
            {issueDetail.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {issueDetail.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            {issueDetail.comments} Comentários
          </span>
        </footer>
      </Content>
      <DetailMain>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {issueDetail.body}
          </ReactMarkdown>
        </div>
      </DetailMain>
    </Container>
  )
}
