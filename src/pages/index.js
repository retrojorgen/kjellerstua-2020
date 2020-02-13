import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Image from "../components/image"
import SEO from "../components/seo"
import embroideryBack from "../images/embroidery.jpg"
import kjellerstuaBasementGraphics from "../images/basement-graphics.png"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 6rem 4rem;
  background: ${props => props.background ? props.background: ""};
  position: relative;
  &:before {
    content: "";
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
    pointer-events: none;
  }
  &.graphics-right {
    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 400px;
      height: 400px;
      opacity: 0.4;
      background-size: auto 60%;
      background-position: bottom left;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});
      
      opacity: 0.2;
      z-index: 3;
      pointer-events: none; 
    }
  }
  &.graphics-left {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 600px;
      height: 400px;
      opacity: 0.4;
      background-size: cover;
      background-position: bottom right;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});
      
      opacity: 0.4;
      z-index: 3;
      pointer-events: none; 
    }
  }
  .content-wrap {

    max-width: 100%;
    width: 960px;
    display: grid;
    grid-column-gap: 30px;
    grid-template-columns: 300px auto;
    color: #e6e2ff;
    position: relative;
    .info-section,
    .description-section {
      position: relative;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        display: block;
        height: 4px;
        background: ${props => props.lineBackground ? props.lineBackground: "linear-gradient(45deg,#6838b3,#322ca1)"};
        border-radius: 4px;
      }
    }
  }
  .submit-button {
    border-radius: 40px;
    background: ${props => props.submitButtonBackground ? props.submitButtonBackground: "linear-gradient(45deg,#6838b3,#322ca1)"};
    color: ${props => props.submitButtonColor ? props.submitButtonColor: "white"};
    text-transform: uppercase;
    padding: 1.2rem 4rem;
    border: 0;
    font-size: 1.2rem;
    letter-spacing: 4px;
    width: 100%;
    margin-top: 2rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: relative;
    z-index: 10;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    &:active {
      transform: scale(0.99);
      box-shadow: 0 0 0 rgba(0,0,0,0.2);
    }
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 1.2rem;
      color: #f06deb;
      padding: 0.2rem 0;
      .icon {
        display: inline-block;
        background: linear-gradient(45deg, #6838b3, #322ca1);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        /* display: flex; */
        text-align: center;
        margin-right: 4px;
      }
    }
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 1.2rem;
  }
  .description-section {
    padding-top: 2.6rem;
    p {
      line-height: 1.8rem;
      margin-bottom: 1rem;
      color: #b7b1d9;
      strong {
        color: #e6e2ff;
      }
    }
  }
  .standfirst {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 1.6rem;
  }
  strong {
    font-weight: bold;
  }
  h3 {
    margin: 2rem 0;
    padding: 0;
    font-family: "fredoka one";
    font-size: 2.5rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section className="graphics-right">
      <div className="content-wrap">
        <div className="info-section">
          <h3>Praktisk info
          </h3>
          <p className="standfirst">20. juni, 2020, <br />Røverstaden, Oslo</p>
          <ul>
            <li>
              <span className="icon">🚀</span> Facebook
            </li>
            <li>
              <span className="icon">🦆</span> Twitter
            </li>
            <li>
              <span className="icon">✉️</span> E-post
            </li>
          </ul>
        </div>
        <div className="description-section">
          
        <p><strong>Som hobbyutvikler er det én ting jeg aldri helt har fått dreisen på: Git.</strong></p>

<p><strong>For selv med moderne verktøy og Git-funksjoner i editoren, må de aller fleste av oss inn i det terminalbaserte Git-universet før eller siden, som kan være utfordrende for selv de mest erfarne utviklerne.</strong></p>

<p>- Nettsida Ohshitgit.com har ei liste med typiske Git fuckups, og hvordan man løser dem. Det er en side jeg har vært inne på litt for mange ganger, innrømmer frilansutvikler Leif Riksheim til kode24.</p>

<p>- Så det slo meg at det ville vært nyttig å ha det rett i terminalen, og at jeg kunne lage et interface over Git-kommandoer gjennom å svare på enkle spørsmål.</p>

<p>Resultatet ble hobbyprosjektet hans OhShitGit.</p>
          
        </div>
      </div>
    </Section>

    <Section  className="graphics-left" background="linear-gradient(45deg, #6838b3, #322ca1)" lineBackground="white" submitButtonBackground="linear-gradient(45deg, white, #d9defd)" submitButtonColor="#3F51B5">
      <div className="content-wrap">
        <div className="info-section">
          <h3>Foreslå foredrag
          </h3>
        </div>
        <div className="description-section">
          
        <p><strong>Som hobbyutvikler er det én ting jeg aldri helt har fått dreisen på: Git.</strong></p>

<p><strong>For selv med moderne verktøy og Git-funksjoner i editoren, må de aller fleste av oss inn i det terminalbaserte Git-universet før eller siden, som kan være utfordrende for selv de mest erfarne utviklerne.</strong></p>

<p>- Nettsida Ohshitgit.com har ei liste med typiske Git fuckups, og hvordan man løser dem. Det er en side jeg har vært inne på litt for mange ganger, innrømmer frilansutvikler Leif Riksheim til kode24.</p>

<p>- Så det slo meg at det ville vært nyttig å ha det rett i terminalen, og at jeg kunne lage et interface over Git-kommandoer gjennom å svare på enkle spørsmål.</p>

<p>Resultatet ble hobbyprosjektet hans OhShitGit.</p>
          <button className="submit-button">Åpne skjema</button>
        </div>
      </div>
    </Section>

    <Section className="graphics-right">
      <div className="content-wrap">
        <div className="info-section">
          <h3>Bli sponsor
          </h3>
        </div>
        <div className="description-section">
          
        <p><strong>Som hobbyutvikler er det én ting jeg aldri helt har fått dreisen på: Git.</strong></p>

<p><strong>For selv med moderne verktøy og Git-funksjoner i editoren, må de aller fleste av oss inn i det terminalbaserte Git-universet før eller siden, som kan være utfordrende for selv de mest erfarne utviklerne.</strong></p>

<p>- Nettsida Ohshitgit.com har ei liste med typiske Git fuckups, og hvordan man løser dem. Det er en side jeg har vært inne på litt for mange ganger, innrømmer frilansutvikler Leif Riksheim til kode24.</p>

<p>- Så det slo meg at det ville vært nyttig å ha det rett i terminalen, og at jeg kunne lage et interface over Git-kommandoer gjennom å svare på enkle spørsmål.</p>

<p>Resultatet ble hobbyprosjektet hans OhShitGit.</p>
          <button className="submit-button">Ta kontakt</button>
        </div>
      </div>
    </Section>


  </Layout>
)

export default IndexPage
