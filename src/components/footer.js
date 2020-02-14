import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import kjellerstuaLogo from "../images/kjellerstua-top-graphics.png"

const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(45deg, black, transparent);
  font-family: "fredoka one";
  position: relative;
  z-index: 10;
  padding: 1rem;

  #logo {
      margin: 0;
      width: 159px;
      background-repeat: no-repeat;
      height: 54px;
      background-image: url(${kjellerstuaLogo});
      background-size: 100% auto;
      display: block;
      margin-top: 2rem;
      margin-bottom: 2rem;
      @media (min-width: 1024px) {
        margin: 0;
      }
  }

  @media (min-width: 1024px) {
    padding: 4rem 4rem;
  }
  .header-shrinker {
    margin: 0 auto;
    width: 960px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
`;

const PageNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "fredoka one";

  li {
    display: block;
    &.social {
      a {
        color: #e6e2ff;
      } 
    }
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
  <FooterWrapper
  >
    <div className="header-shrinker">
      <span id="logo"></span>
      <PageNavigation>
        <li><a href="#">Praktisk informasjon</a></li>
        <li><a href="#">Foreslå foredrag</a></li>
        <li><a href="#">Bli sponsor</a></li>
      </PageNavigation>
    </div>
  </FooterWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
