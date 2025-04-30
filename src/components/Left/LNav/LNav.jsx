import "./LNav.css"
import logo from "../../../assests/img/logowithoutname.png"


export default function LNav() {
  return (
    <div className="left-nav-container" >

      <div className="logo">
        <img src={logo} alt="logo"/>
        <h2>Music<label>In</label></h2>
      </div>

    </div>
  )
}
