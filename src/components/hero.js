import React from "react"
import styled, {keyframes} from "styled-components"
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
  background: radial-gradient(#6838b3,#322ca1);
  position: relative;
  overflow: hidden;
  height: 314px;
  @media (min-width: 1024px) {
    height: 590px;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(0deg,#0000005e, transparent);
  }
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
    
    top: -48px;
    left: 13px;
    width: 370px;
    margin-bottom:80px;
    position: relative;
    z-index: 5;
    animation: ${moveUpAnimation} 1s ease-in-out forwards 0.5s;
    opacity: 0;
    @media (min-width: 1024px) {
      width: 686px;
      left: 24px;
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
    opacity: 1;
    z-index: 10;
  }  
`;

const Header = ({ siteTitle }) => (
  <HeroWrapper
  > 
    <img id="hero-logo-graphics" src={kjellerstuaLogo} />
    <div id="embroidery-overlay"></div>
    <div id="hero-basement-graphics"></div>
  </HeroWrapper>
)

export default Header
