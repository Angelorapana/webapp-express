import Header from "../components/Header"
import { Outlet } from "react-router-dom"

function LayoutPrincipale() {
  return (
    <>
      <Header />

      <main className="container py-4">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutPrincipale