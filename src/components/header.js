import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import kjellerstuaLogo from "../images/kjellerstua-top-graphics.png"
import SvgIcon from "./svgIcons"

const hoverColor = "#c6b0ef"

const HeaderWrapper = styled.header`
  width: 100%;

  font-family: "fredoka one";
  position: fixed;
  z-index: 40;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  background-color: #2f2174;
  @media (min-width: 1024px) {
    top: 0;
    background-color: #080c27;
    bottom: auto;
    height: 70px;
  }

  .header-shrinker {
    margin: 0 auto;
    width: 960px;
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    @media (min-width: 1024px) {
      margin: 0;
      width: 159px;
      background-repeat: no-repeat;
      height: 54px;
      background-image: url(${kjellerstuaLogo});
      background-size: 100% auto;
      display: block;
    }
  }
`

const PageNavigation = styled.nav`
  display: flex;
  color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: "fredoka one";
  @media (min-width: 1024px) {
    position: regular;
    left: auto;
    top: auto;
  }
  li {
    display: block;
  }
  a {
    display: flex;
    padding: 1em 1em 3em 1em;
    font-size: 0.7em;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px;
    flex-direction: column;
    @media (min-width: 1024px) {
      padding: 1em;
      text-align: left;
      font-size: 0.8em;
      flex-direction: row;
    }
    .menu-icon {
      width: 20px;
      height: 20px;
      margin-bottom: 10px;
      @media (min-width: 1024px) {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
    &:hover {
      @media (min-width: 1024px) {
        color: ${hoverColor};
        background-color: #1f0b42;
        circle,
        path {
          stroke: ${hoverColor};
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div className="header-shrinker">
      <span id="logo"></span>
      <PageNavigation>
        <li>
          <a href="#practical-info">
            <SvgIcon className="menu-icon" name="tv" hoverColor={hoverColor} />{" "}
            Praktisk informasjon
          </a>
        </li>
        <li>
          <a href="#suggest-presentation">
            <SvgIcon
              className="menu-icon"
              name="lamp"
              hoverColor={hoverColor}
            />{" "}
            Foreslå foredrag
          </a>
        </li>
        <li>
          <a href="#become-sponsor">
            <SvgIcon
              className="menu-icon"
              name="couch"
              hoverColor={hoverColor}
            />{" "}
            Bli sponsor
          </a>
        </li>
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
