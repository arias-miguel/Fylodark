import styled from "styled-components";

export const MenuStyle = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
    margin: 0%;
    padding: 0%;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    background-color: #1b2330;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
`;
export const MenuNavStyle = styled.nav` 
    position: relative;
    right: -2%;
    @media (min-width: 600px) {
        right: -35%;
  }
    @media (min-width: 1000px) {
        right: -60%;
  }
`;
export const MenuUlStyle = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: end;
    
`;
export const MenuHItemsStyle = styled.li`
    padding-right:17px;
    right: 0px;
`;
export const MenuImgStyle = styled.img`
    padding: 25px;
    width: 80px;
`;