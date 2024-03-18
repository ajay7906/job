
import Navbar from '../navbar/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout