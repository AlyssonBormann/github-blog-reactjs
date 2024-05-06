import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Issue {
  id: string
  title: string
  body: string
  created_at: string
  number: string
}

interface IssueContextType {
  issues: Issue[]
  fetchIssues: (query: string | null) => Promise<void>
}

interface IssueProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssueProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query: string | null) {
    const response = await api.get(
      `search/issues?q=${query}%20repo:AlyssonBormann/github-blog-reactjs`,
    )
    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues('')
  }, [])
  return (
    <IssueContext.Provider
      value={{
        issues,
        fetchIssues,
      }}
    >
      {children}
    </IssueContext.Provider>
  )
}
