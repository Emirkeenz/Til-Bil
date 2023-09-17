import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"
import { Header } from '../header';
import { AuthContent } from "./styled"

export const AuthLayout = () => {
  const headerRef = useRef();

  const sizes = useSizes({
    header: headerRef,
  })

  return (
    <div>
      <Header ref={headerRef} />      
      <AuthContent $headerH={sizes.header.height}>
        <Outlet />
      </AuthContent>
    </div>
  )
}