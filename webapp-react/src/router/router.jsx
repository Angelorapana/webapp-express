import { createBrowserRouter } from "react-router-dom"

import LayoutPrincipale from "../layouts/LayoutPrincipale"

import HomePage from "../pages/HomePage"
import PaginaDettaglioFilm from "../pages/PaginaDettaglioFilm"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipale />,

    children: [
      {
        path: "/",
        element: <HomePage />
      },

      {
        path: "/movies/:id",
        element: <PaginaDettaglioFilm />
      }
    ]
  }
])

export default router;