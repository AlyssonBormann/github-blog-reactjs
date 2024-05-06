import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import {
  PersonInfoContainer,
  PersonInfoContent,
  PersonInfoDescriptonBio,
  PersonInfoFooter,
  PersonInfoHeader,
} from './styles'

interface UserInfo {
  name: string
  followers: number
  githubUsername: string
  company: string
  url: string
  imgUrl: string
  description: string
  location: string
}

export function PersonInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo)

  const fetchUserInfo = useCallback(async () => {
    const response = await api.get('users/AlyssonBormann')
    console.log(response.data)
    const {
      name,
      followers,
      login,
      company,
      html_url: htmlUrl,
      avatar_url: avatarUrl,
      bio,
      location,
    } = response.data

    const user = {
      name,
      followers,
      githubUsername: login,
      company,
      url: htmlUrl,
      imgUrl: avatarUrl,
      description: bio,
      location,
    }

    setUserInfo(user)
  }, [])

  useEffect(() => {
    fetchUserInfo()
  }, [fetchUserInfo])

  return (
    <PersonInfoContainer>
      <img
        src="https://github.com/alyssonbormann.png"
        alt=""
        width={148}
        height={148}
      />
      <PersonInfoContent>
        <PersonInfoHeader>
          <h1>{userInfo.name}</h1>
          <a href={userInfo.url} target="_blank" rel="noreferrer">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </PersonInfoHeader>
        <PersonInfoDescriptonBio>
          {userInfo.description}
        </PersonInfoDescriptonBio>
        <PersonInfoFooter>
          <span>
            <i className="fa-brands fa-github"></i>
            {userInfo.githubUsername}
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            Company
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            {userInfo.followers}
            Followers
          </span>
        </PersonInfoFooter>
      </PersonInfoContent>
    </PersonInfoContainer>
  )
}
