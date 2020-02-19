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
  padding: 2rem;
  background: ${props => (props.background ? props.background : "")};
  position: relative;
  overflow-x: hidden;
  a {
    color: white;
    font-weight: bold;
    text-decoration: underline;
    &:hover {
      color: #ae8fe6;
    }
  }
  @media (min-width: 1024px) {
    padding: 6rem 4rem;
  }
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
    opacity: 0.1;
    z-index: 4;
    pointer-events: none;
    @media (min-width: 1024px) {
      opacity: 0.4;
    }
  }
  &.graphics-right {
    &:after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 400px;
      height: 140px;
      opacity: 0.4;
      background-size: auto 60%;
      background-position: bottom left;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});

      opacity: 0.2;
      z-index: 3;
      pointer-events: none;
      @media (min-width: 1024px) {
        height: 400px;
      }
    }
  }
  &.graphics-left {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 600px;
      height: 140px;
      opacity: 0.4;
      background-size: cover;
      background-position: bottom right;
      background-repeat: no-repeat;
      background-image: url(${kjellerstuaBasementGraphics});

      opacity: 0.4;
      z-index: 3;
      pointer-events: none;
      @media (min-width: 1024px) {
        height: 330px;
        width: 550px;
      }
    }
  }
  .content-wrap {
    max-width: 100%;
    width: 960px;

    color: #e6e2ff;
    position: relative;
    @media (min-width: 1024px) {
      display: grid;
      grid-column-gap: 30px;
      grid-template-columns: 300px auto;
    }
    .info-section {
      padding-bottom: 1.5rem;
      text-align: center;
      @media (min-width: 1024px) {
        text-align: left;
      }
    }
    .info-section,
    .description-section {
      position: relative;
      z-index: 10;
      &:before {
        position: absolute;
        left: 0;
        top: 0;
        content: "";
        width: 100%;
        display: block;
        height: 4px;
        background: ${props =>
          props.lineBackground
            ? props.lineBackground
            : "linear-gradient(45deg,#6838b3,#322ca1)"};
        border-radius: 4px;
      }
    }
  }
  .submit-button {
    border-radius: 40px;
    word-break: break-word;
    background: ${props =>
      props.submitButtonBackground
        ? props.submitButtonBackground
        : "linear-gradient(45deg,#6838b3,#322ca1)"};
    color: ${props =>
      props.submitButtonColor ? props.submitButtonColor : "white"};
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
    text-decoration: none;
    display: block;
    text-align: center;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      color: ${props =>
        props.submitButtonColor ? props.submitButtonColor : "white"};
    }
    &:active {
      transform: scale(0.99);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
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
    &:last-child {
      margin-bottom: 0;
    }
  }
  strong {
    font-weight: bold;
  }
  h3 {
    margin: 0;
    padding-top: 2rem;
    font-family: "fredoka one";
    font-size: 2rem;
    margin-bottom: 0.5rem;
    @media (min-width: 1024px) {
      margin: 2rem 0;
      font-size: 2.5rem;
      padding: 0;
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Section id="practical-info" className="graphics-right">
      <div className="content-wrap">
        <div className="info-section">
          <h3>Praktisk info</h3>
          <p className="standfirst">
            20. juni, 2020, <br />
            Røverstaden, Oslo
          </p>
          {/**
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
           * 
           */}
        </div>
        <div className="description-section">
          <p>
            <strong>
              Er du klar for årets artigste inspirasjonsdag med kode24-gjengen?
            </strong>
          </p>

          <p>
            Jaggu starter ikke kode24 sin egen messe. En hel dag med kodekos og
            fantastiske gjester. Gjennom en hel dag skal vi lære sammen om ting
            som skal gjøre deg til en bedre koder i 2020 og fremover.
          </p>

          <p>
            Konferansen holdes på trivelige Røverstaden, i Vika i Oslo. Som det
            fremkommer av navnet foregår selve konferansen i kjelleren. Vi
            serverer kaffe, drikke og alt du skulle trenge for å kose deg på
            konferansen, og det blir servert både lunsj og middag i løpet av
            konferansen.
          </p>

          <p>
            Vi jobber fortsatt med programmet, så om du kjenner noen som er en
            driftig foredragsholder, be vedkommende{" "}
            <a href="#submit-presentation">sende en søknad</a>, da vel? 🥳
          </p>

          <p>
            Vi gleder oss til å treffe alle dere på konferansen. Kjellerstua
            erstatter en vanlig arbeidsdag med en dag proppfull av
            vitamininnsprøytinger.
          </p>
          <p>
            Vi sees der! PS, early bird-billetter kommer i salg om kort tid.
            Følg med på{" "}
            <a href="https://www.kode24.no" target="new_window">
              kode24.no
            </a>{" "}
            og vår{" "}
            <a href="https://www.facebook.com/kode24" target="new_window">
              facebook-side
            </a>
            .
          </p>
        </div>
      </div>
    </Section>

    <Section
      id="suggest-presentation"
      className="graphics-left"
      background="linear-gradient(45deg, #6838b3, #322ca1)"
      lineBackground="white"
      submitButtonBackground="linear-gradient(45deg, white, #d9defd)"
      submitButtonColor="#3F51B5"
    >
      <div className="content-wrap">
        <div className="info-section">
          <h3>Foreslå foredrag</h3>
        </div>
        <div className="description-section">
          <p>
            <strong>
              Vil du holde et foredrag på Kjellerstua 2020? Så kult a gitt!
            </strong>
          </p>

          <p>
            Selv om vi gjerne skulle hatt plass til alle foredragene i verden,
            har vi bare tid til én dag med foredrag. Derfor ber vi alle som vil
            holde foredrag fylle ut skjemaet under, så hører du fra oss når vi
            skal sette sammen årets program!
          </p>

          <p>
            Obs, vi ser etter mest mulig praktiske foredrag, hvor lytteren kan
            lære noe håndfast hun kan bruke i yrket sitt.{" "}
          </p>
          <a
            href="https://forms.gle/WuRgzf4VywBcVqcS6"
            target="new_window"
            className="submit-button"
          >
            Åpne skjema
          </a>
        </div>
      </div>
    </Section>

    <Section id="become-sponsor" className="graphics-right">
      <div className="content-wrap">
        <div className="info-section">
          <h3>Bli sponsor</h3>
        </div>
        <div className="description-section">
          <p>
            <strong>
              Gi firmaet ditt synlighet på årets kuleste inspirasjonskonferanse
              for kodere!
            </strong>
          </p>
          <p>
            Vi ser etter et lite utvalg sponsorer som ønsker å bli en del av
            Kjellerstua. Vi er fleksible på å finne gode og spennende løsninger,
            for at dere skal skinne mest mulig, og få masse trivelig
            oppmerksomhet fra våre besøkende.
          </p>
          <p>
            På jakt etter nye kodehoder? Da er det Kjellerstua dere skal stille
            ut i!
          </p>
          <p>
            Ta kontakt med vår sponsor-ansvarlig <strong>navn navnesen</strong>{" "}
            for en trivelig prat:
          </p>
          <p>
            <a href="tel:23522652" className="submit-button">
              Ring: 23522652
            </a>
          </p>
          <a href="mailto:navn.navnesen@navn.no" className="submit-button">
            Mail: navn.navnesen@navn.no
          </a>
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
