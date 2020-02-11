import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const FooterWrapper = styled.footer`
  width: 100%;
  background: linear-gradient(45deg, black, transparent);
  font-family: "fredoka one";
  position: relative;
  z-index: 10;
  padding: 4rem 4rem;
  .header-shrinker {
    margin: 0 auto;
    width: 960px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    color: white;
    text-transform:uppercase;
    font-size: 2em;
    padding: 0.5em;
    margin: 0;
    a {
      color: white;
      text-decoration: none;
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

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 60%;
      height: 4px;
      background: linear-gradient(45deg,#673AB7,#E91E63);
      transform: translateX(-50%) translateY(4px) scale(0);
      transition: all 0.1s ease-in-out;
      opacity: 0;
    }
    &:hover {
      &:after {
        transform: translateX(-50%) translateY(0) scale(1);
        opacity: 1;
      }
    }
  }
`;

const Header = ({ siteTitle }) => (
  <FooterWrapper
  >
      <div className="header-shrinker">
        <span id="logo">
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </span>
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
