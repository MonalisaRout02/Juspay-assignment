import IconBreadcrump from "./partials/IconBreadcrump"
import SearchBarContainer from "./partials/SearchBarContainer"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <IconBreadcrump />
      <SearchBarContainer />
    </nav>
  )
}

export default Navbar
