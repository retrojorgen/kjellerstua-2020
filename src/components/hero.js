import React from "react"
import styled from "styled-components"


const HeroWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  font-family: "Fredoka One";
  min-height: 600px;
  background: linear-gradient(45deg,#673AB7,#E91E63);
    h1 {
        color: white;
        text-transform: uppercase;
        font-size: 8em;
        font-weight: regular;
        margin-bottom: 0.4rem;
    }
    h2 {
        color: white;
    }
`;

const Header = ({ siteTitle }) => (
  <HeroWrapper
  > 
    <h1>Kjellerstua</h1>
    <h2>20. august, 2020, Røverstaden, Oslo.</h2>
  </HeroWrapper>
)

export default Header
