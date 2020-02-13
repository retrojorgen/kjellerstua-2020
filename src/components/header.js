import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import kjellerstuaLogo from "../images/kjellerstua-top-graphics.png"


const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #080c27;
  font-family: "fredoka one";
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  height: 70px;
  display: flex;
  align-items: center;

  .header-shrinker {
    margin: 0 auto;
    width: 960px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    margin: 0;
    width: 159px;
    background-repeat: no-repeat;
    height: 54px;
    background-image: url(${kjellerstuaLogo});
    background-size: 100% auto;
  }
`;

const PageNavigation = styled.nav`
  display: flex;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "fredoka one";

  li {
    display: block;
  }
  a {
    display: block;
    padding: 1em;
    font-size: 0.8em;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    &:hover {
      color: #ae8fe6;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper
  >
      <div className="header-shrinker">
        <span id="logo">
        </span>
        <PageNavigation>
          <li><a href="#">Praktisk informasjon</a></li>
          <li><a href="#">Foreslå foredrag</a></li>
          <li><a href="#">Bli sponsor</a></li>
          
        </PageNavigation>
      </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
