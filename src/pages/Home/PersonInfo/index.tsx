import {
  PersonInfoContainer,
  PersonInfoContent,
  PersonInfoDescriptonBio,
  PersonInfoFooter,
  PersonInfoHeader,
} from './styles'

export function PersonInfo() {
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
          <h1>Alysson Bormann</h1>
          <a href="" target="_blank" rel="noreferrer">
            GITHUB <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </PersonInfoHeader>
        <PersonInfoDescriptonBio>
          <p>Descricao da BIO</p>
        </PersonInfoDescriptonBio>
        <PersonInfoFooter>
          <span>
            <i className="fa-brands fa-github"></i>
            Username
          </span>
          <span>
            <i className="fa-solid fa-building"></i>
            Company
          </span>
          <span>
            <i className="fa-solid fa-user-group"></i>
            Followers
          </span>
        </PersonInfoFooter>
      </PersonInfoContent>
    </PersonInfoContainer>
  )
}
