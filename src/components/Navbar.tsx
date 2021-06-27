import {NavLink} from "react-router-dom";

export const Navbar:React.FC = () => {
  return (
    <div className={'nav-bar'}>
      <div className={'nav-title'}>React and TypeScript</div>
      <div className={'pages'}>
        <NavLink to={'/'}>Todos</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </div>
    </div>
  )
}