import { Outlet } from "react-router-dom"
import { Navbar, Footer } from '../components'

function HomeLayout() {
  return (
    <>
      <Navbar/>
      <main className="grow">
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default HomeLayout