import "./Library.css"
import library from "../../../assests/svg/library.svg"

export default function Library() {
  return (

    <div className="library bg-grey rounded">
                    
      <div className="library-header ">
          <img class="invert" src={library} alt="library"/>
          <h2>
              <label>Your library</label>
          </h2>
      </div>

      <div class="song-list"> 
          <ul></ul>
      </div>

  </div>

  )
}
