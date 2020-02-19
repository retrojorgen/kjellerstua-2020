import React from "react"
import styled, { keyframes } from "styled-components"
import embroideryBack from "../images/embroidery.jpg"
import kjellerstuaLogo from "../images/kjellerstua-logo.png"
import kjellerstuaBasementGraphics from "../images/basement-graphics.png"

const moveUpAnimation = keyframes`
0% {
  transform: translateY(100%) skew(10deg) rotate(10deg) translateZ(0);
  opacity: 0;
  filter: blur(20px);
}
80% {
  transform: translateY(14px) skew(0) rotate(0) translateZ(0);
  opacity: 1;
  filter: blur(0);
}
90% {
  transform: translateY(12px) skew(0) rotate(-2deg) translateZ(0);
  opacity: 0.9;
  filter: blur(0);
}
100% {
  transform: translateY(14px) skew(0) rotate(0) translateZ(0);
  opacity: 1;
  filter: blur(0);
}
`

const HeroWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  font-family: "Fredoka One";
  padding-top: 80px;
  background: radial-gradient(#6838b3, #322ca1);
  position: relative;
  overflow: hidden;
  height: 260px;
  @media (min-width: 1024px) {
    height: 590px;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg, #0000005e, transparent);
  }
  #embroidery-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${embroideryBack});
    background-size: auto 90%;
    mix-blend-mode: multiply;
    opacity: 0.4;
    z-index: 4;
  }
  #hero-logo-graphics {
    top: -40px;
    left: 0px;
    width: 300px;
    margin-bottom: 80px;
    position: relative;
    z-index: 5;
    animation: ${moveUpAnimation} 1s ease-in-out forwards 0.5s;
    opacity: 0;
    @media (min-width: 1024px) {
      width: 686px;
      top: -76px;
    }
  }
  #hero-basement-graphics {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${kjellerstuaBasementGraphics});
    background-position: top center;
    background-size: auto 100%;
    background-repeat: no-repeat;
    opacity: 0.5;
    z-index: 10;
    @media (min-width: 1024px) {
      opacity: 1;
    }
  }
`

const Tagline = styled.h1`
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 1em;
  bottom: 18px;
  max-width: 80%;
  color: white;
  @media (min-width: 1024px) {
    font-size: 3em;
    bottom: 45px;
  }
  span {
    background-color: orange;
    display: inline-block;
    padding: 10px;
    border-radius: 28px;
  }
`

const Header = ({ siteTitle }) => (
  <HeroWrapper>
    <img id="hero-logo-graphics" src={kjellerstuaLogo} />
    <div id="embroidery-overlay"></div>
    <div id="hero-basement-graphics"></div>
    <Tagline>
      Inspirasjonsdag for <span>kodeskills i 2020</span>
    </Tagline>
  </HeroWrapper>
)

export default Header
