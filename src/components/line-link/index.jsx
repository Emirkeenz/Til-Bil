import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: white;
`

export const LineLink = ({className, children, to}) => {
  return (
    <StyledLink to={to} className={className}>{children}</StyledLink>
  )
}