import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { SideMenu } from "./SideMenu";
import { SvgLinkedin, SvgInstagram } from "./SvgCollection";
import { ContactForm } from "./ContactForm";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SideMenu
        data=""
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />
      <Header>
        <Link href="/">
          <a className="logo">Laniakea</a>
        </Link>
        <nav className="mainNav">
          <Link href="">
            <a className="buildMenuLink">
              let's build{" "}
              <svg
                style={{ verticalAlign: "12%" }}
                width="8"
                height="6"
                viewBox="0 0 8 6"
              >
                <path d="M4 6L0.535898 0L7.4641 0L4 6Z" fill="black" />
              </svg>
              <div className="buildMenu">
                <Link href="/brand-sites">
                  <a className="item-1">brand sites</a>
                </Link>
                <Link href="/e-commerce">
                  <a className="item-2">e-commerce</a>
                </Link>
                <Link href="apps">
                  <a className="item-3">apps</a>
                </Link>
              </div>
            </a>
          </Link>
          <Link href="">references</Link>
          <Link href="">blog</Link>
          <Link href="">laniakea?</Link>
        </nav>
        <nav className="rightNav">
          <button className="button" onClick={() => setMenuOpen(true)}>
            contact
          </button>
        </nav>
      </Header>
      <Page>{children}</Page>

      <Footer>
        <section>
          <h2>maybe we should talk?</h2>
          <div className="Row">
            <div>
              <ContactForm />
            </div>
            <div>
              <p className="contactPerson">
                Aleksi Tuompo
                <br />
                aleksi@laniakea.fi
                <br />
                044 252 0386
              </p>
              <p className="socialLinks">
                <a
                  href="https://www.linkedin.com/in/aleksituompo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/aleksituompo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SvgInstagram />
                </a>
              </p>
              <p className="companyInfo">
                Laniakea Studio Oy
                <br />
                ALV-tunnus: FI31996699
                <br />
                Helsinki, Finland
              </p>
            </div>
          </div>
          <p className="credits">
            Made with <del>love</del> a keyboard
            <br />
            Laniakea Studio Oy • Helsinki 2021
          </p>
        </section>
      </Footer>
    </>
  );
};

export default Layout;

const Header = styled.header`
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    font-family: FreightNeo Pro;
    font-style: italic;
    font-weight: bold;
    font-size: 38px;
  }
  nav {
    font-size: 18px;
  }
  .mainNav {
    a {
      padding: 10px 20px;
    }
  }
  .rightNav {
    a.contact {
    }
  }

  .buildMenuLink {
    position: relative;
  }
  .buildMenu {
    display: none;
    flex-direction: column;
    position: absolute;
    margin-top: 10px;
    border-radius: 3px;
    width: 180px;
    right: 0;
    text-align: right;
  }
  .buildMenuLink:hover .buildMenu {
    display: flex;
  }
  .buildMenu a {
    opacity: 0;
    padding-top: 16px;
    padding-bottom: 16px;
    transition: background 0.1s;
    background: #fff;
    &:hover {
      background: #f3f7fc;
      transition: background 0.2s;
    }
  }
  .buildMenu .item-1 {
    transform-origin: top center;
    animation: rotateX 300ms calc(1 * 60ms) ease-in-out forwards;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-top: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }
  .buildMenu .item-2 {
    transform-origin: top center;
    animation: rotateX 300ms calc(2 * 60ms) ease-in-out forwards;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }
  .buildMenu .item-3 {
    transform-origin: top center;
    animation: rotateX 300ms calc(3 * 60ms) ease-in-out forwards;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
  }

  @keyframes rotateX {
    0% {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    50% {
      transform: rotateX(-20deg);
    }
    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
`;

const Page = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  background: ${theme.bgBlack};
  color: ${theme.colorOnBlack};
  width: 100%;

  h2 {
    font-size: 84px;
    margin-bottom: 120px;
  }
  p {
    font-size: 16px;
  }
  section {
    padding: 120px 20px 10px;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .Row {
    gap: 40px;
    margin-bottom: 100px;
  }
  .Row > div {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 360px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .contactPerson {
    line-height: 2.1;
    margin-bottom: 20px;
  }
  .socialLinks {
    display: flex;
    gap: 20px;
    a:hover {
      svg path {
        fill: #fff;
        transition: fill 0.15s;
      }
    }
  }
  .companyInfo {
    margin-top: auto;
  }
  .credits {
    font-size: 14px;
    text-align: center;
    opacity: 0.65;
  }
`;
