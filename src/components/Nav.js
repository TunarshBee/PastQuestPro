import './css/Nav.css'

export default function Nav() {
  return (
    <div>
      <nav className="Navbar">
        <div className="topLogo">
          <h2 className="navTitle">
            PAST DEMO
          </h2>
        </div>
        <ul className="topList">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact Us</a>
          </li>
          <li>
            <a href="#Courses">Courses</a>
          </li>
        </ul>
        <input type="text" placeholder='search' className='search' />
      </nav>
    </div>
  )
}
