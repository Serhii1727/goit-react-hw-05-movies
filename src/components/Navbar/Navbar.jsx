import { Header, NavList, NavListItem } from "./Navbar.styled";

export const Navbar = () => {
    return (
        <Header className="header">
            <NavList className="navigation">
                <NavListItem className="navigation__item">Home</NavListItem>
                <NavListItem className="navigation__item">Movies</NavListItem>
            </NavList>
        </Header>
    )
}

export default Navbar;