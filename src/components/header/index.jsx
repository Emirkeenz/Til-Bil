import { useNavigate, NavLink } from "react-router-dom"
import styled from "styled-components"
import { Container } from "../../styles/adaptive"
import { LineLink } from "../line-link"
import { media } from "../../styles/adaptive"
import { forwardRef } from "react"

const HeaderWrapper = styled.header`
  background-color: #1788C2;
  width: 100%;
  align-items: center;
  height: 70px;
  box-shadow: 0px 4px 10px 0 rgb(0, 0, 0, 0.05);
`

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${media.xs`
    display: none;
  `}
  ${media.md`
  display: flex;
  & div {
    display: flex;
    align-items: center;
  }
  `}
`

const Left = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
// const LogoutButton = styled(Button)`
//   margin-left: 40px;
// `

const LeftLink = styled(LineLink)`
  margin-left: 40px;
`

// const BurgerBtn = styled(Button)`
    
//   ${media.xs`
//     display: flex;
//     align-items: center;
//   & svg path:hover {
//       fill: white;
//     }
//   `}
// `

const MobContent = styled(Container)`
  ${media.xs`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
    ${media.md`
    display: none;
  `
  }
`

export const Header = forwardRef((props, ref) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/auth/login')
  }

  return (
    <HeaderWrapper ref={ref}>
      <Content>
        <Left>
          <LeftLink to="/">САБАКТАР</LeftLink>
          <LeftLink to="/">ОЮНДАР</LeftLink>
          <LeftLink to="/">ТАПШЫРМАЛАР</LeftLink>
          <LeftLink to="/">ТИРКЕМЕ</LeftLink>
        </Left>
        
        {/* <div>
          <LeftLink to="/profile">My Profile</LeftLink>
          <LogoutButton
            variant="secondary"
            onClick={handleLogout}
          >
            Log out
          </LogoutButton>
        </div> */}
      </Content>
          {/* <MobContent>
          <NavLink to="/"><Logo /></NavLink>
          <BurgerBtn variant="icon" icon={<BurgerIcon />} />
          </MobContent> */}
    </HeaderWrapper>
  )
})