import styled from "styled-components";

export const Header = styled.header`
height: 50px;
box-shadow: 0 14px 28px rgba(0,0,0,0.25);
`

export const NavList = styled.ul`
display: flex;
margin: 0;
padding: 0;
height: 100%;
margin-left: 50px;
`

export const NavListItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
list-style: none;
width: 70px;
font-size: larger;
:hover {
    color: #f15970;

}
:not(:last-child) {
    margin-right: 10px;
}
    
`