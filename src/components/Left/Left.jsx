import "./Left.css"

import LNav from "../Left/LNav/LNav.jsx"
import Library from "../Left/Library/Library.jsx"

export default function Left() {
  return (
    <div className="left">
      <LNav/>
      <Library/>
    </div>
  )
}
