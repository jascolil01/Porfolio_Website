import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <div>
      <label className="hamburger-menu"><input type="checkbox" /></label>
      <div className="sidebar">
        <div className="NavBar">
          <div className="links"><NavLink to='/'>Home</NavLink></div>
          <div className="links"><NavLink to='/About'>About</NavLink></div>
          <div className="links"><NavLink to='/TicTacToe'>Project1</NavLink></div>
          <div className="links"><NavLink to='/BlackJack'>Project2</NavLink></div>
          <div className="links"><NavLink to='/CoffeePlace'>Project3</NavLink></div>
        </div>
      </div>
    </div>
  )
}
