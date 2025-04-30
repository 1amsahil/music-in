import search from "../../../assests/svg/search.svg"
import "./Search.css"

export default function RNav() {
  return (
    <div className="search-container" >
      <form className="search" >
        <input className="search-input" type="text" placeholder="Search"/>
        <img src={search} alt="search-icon" />
      </form>

    </div>
  )
}
