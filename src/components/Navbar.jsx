import { NavLink,useNavigate } from "react-router-dom";

export function Navbar() {

const navigate=useNavigate();

  const handlesearch=(e)=>{
  
e.preventDefault();
const queryterm=e.target.search.value;
// console.log(queryterm);

e.target.reset();

return navigate(`/search?q=${queryterm}`)


  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <span>
              <i className="bi bi-camera-reels m-1"></i>
            </span>
            MovieHunt
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/toprated">
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/popular">
                  Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies/upcoming">
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handlesearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
              name="search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
