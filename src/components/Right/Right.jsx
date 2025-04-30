import "./Right.css"

import Search from "../Right/Search/Search"
import RNav from "./RNav/RNav"

export default function Right() {
  return (
    <div className="right" >
        <RNav/>
        <Search/>
    </div>
  )
}
