import { Link } from "react-router";
import { NavLink } from "react-router";
import Container from "../Container";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            alignItems: "center",
          }}
        >
          <div>
            <Link to="/" className={css.logo}>
              Travel<span>Trucks</span>
            </Link>
          </div>
          <nav className={css.navigation}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
