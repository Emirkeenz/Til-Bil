import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { useSizes } from "../../hooks/useSizes"
import { Footer } from "../footer"
import { AuthContent } from "./styled"

export const HeroLayout = () => {
  const footerRef = useRef()

  const sizes = useSizes({
    footer: footerRef,
  })

  return (
    <div>      
      <AuthContent $footerH={sizes.footer.height}>
        <Outlet />
      </AuthContent>
      <Footer ref={footerRef} />
    </div>
  )
}