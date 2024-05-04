import techBg from '../../assets/tech-bg.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={techBg} alt="GITHUB Blog Logo" />
    </HeaderContainer>
  )
}
