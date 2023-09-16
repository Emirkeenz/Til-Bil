import { useRef } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../header"
import { Footer } from "../footer"
import { useSizes } from '../../hooks/useSizes'
import { MainContent } from "./styled"

export const MainLayout = () => {
  const headerRef = useRef()
  const footerRef = useRef()

  const sizes = useSizes({
    header: headerRef,
    footer: footerRef,
  })

  return (
    <div>
      <Header ref={headerRef}/>
      
      <MainContent 
        $footerH={sizes.footer.height}
        $headerH={sizes.header.height}
      >
        <Outlet />
      </MainContent>
      
      <Footer ref={footerRef}/>
    </div>
  )
}