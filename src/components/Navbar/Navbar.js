import { Link } from "react-router-dom";
import styled from "styled-components";
import DataNavbar from "../../utils/constants/DataNavbar";

const Navbar = () => {
  const data = DataNavbar;
  return (
    <NavbarContainer>
      <NavbarStyle>
        <div>
          <h1 className="navbar__brand">My Movie</h1>
        </div>
        <div>
          <ul className="navbar__list">
            {data.map(function (data) {
              return (
                <li key={data.id} className="navbar__item">
                  <Link className="nav__title" to={data.url}>
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </NavbarStyle>
    </NavbarContainer>
  );
};

const NavbarStyle = styled.nav`
  display: flex;
  flex-direction: column;

  .navbar__brand {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    margin: 0 auto;
    color: #e50914;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
  }

  .navbar__item {
    margin-bottom: 1rem;
  }

  .nav__title {
    color: #f5f5f1;
    text-decoration: none;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .navbar__brand {
      margin-bottom: 0;
    }

    .navbar__list {
      flex-direction: row;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
  }
`;

const NavbarContainer = styled.div`
  background-color: #221f1f;
  padding: 1rem;
`;

export default Navbar;
