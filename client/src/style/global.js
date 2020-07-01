import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

${
  "" /* 
$lGradLight: linear-gradient(#c0c0c0, #5a5a5a, #242424);
$lGradDark: linear-gradient(#0f2027, #203a43, #2c5364);
$ColorDefault:${({ theme }) => theme.body};
$ColorLight: #c7c7c7;
$font: "monospace";
$fontLogo: "monospace";
$fontColorDefault: ${({ theme }) => theme.text};
$fontColorLight: rgb(223, 223, 223);
$fontColorDark: rgb(59, 59, 59);
$fontAlert: rgb(223, 90, 90);

$fontSizeH: 2.5rem;
$fontSizeH2: 1.5rem;
$fontSizeT: 1rem;

$textShadow: 6px 6px 0px rgba(0, 0, 0, 0.2);
$textShadow2: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
  0px 18px 23px rgba(0, 0, 0, 0.1);

$borderRadius: 8px;
$borderRadiusSH: 8px;
$borderH: 0.6rem solid $fontColorDefault;
$borderSH: 0.3rem solid $fontColorDefault;


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  margin: 0;
  min-height: 100vh;
  min-width: 320px;
  font-family: monospace;
  font-size: $fontSizeT;
  background-color: $ColorDefault;
  color: $fontColorDefault;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

a {
  color: $fontColorDefault;
  text-decoration: none;
}

ul {
  list-style: none;
}

img {
  width: 100%;
}

.btnI,
.btnI:hover {
  font-family: monospace;
  font-size: $fontSizeH2;
  font-weight: bolder;
  background-color: $ColorDefault;
  color: $fontColorDefault;
  border: $borderSH;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: $borderRadius;
}

.btnII,
.btnII:hover {
  font-family: monospace;
  font-size: $fontSizeH2;
  font-weight: bolder;
  background-color: $fontColorDefault;
  color: $ColorDefault;
  border: $borderSH;
  padding: 0.5rem 1rem;
  margin: 1rem;
  border-radius: $borderRadius;
}

input {
  font-family: monospace;
  font-size: $fontSizeH2;
  font-weight: bolder;
  background-color: $ColorDefault;
  color: $fontColorDefault;
  border: $borderSH;
  padding: 0.5rem 1rem;
  margin: 0rem;
  border-radius: $borderRadius;
}

.header {
  font-size: $fontSizeH;
  font-weight: bolder;
  border: $borderH;
  border-radius: $borderRadius;
  padding: 1rem 2rem;
  margin: 0 1rem;
}

.subHeader {
  font-size: $fontSizeH;
  border: $borderSH;
  border-radius: $borderRadius;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
}

.text {
  font-size: $fontSizeT;
}

.navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 0rem;
  margin: 1rem 0;

  width: 100%;

}
.navbar .link {
  margin: 0rem 1rem;
}

.link:hover {
  text-decoration: none;
}
.link span {
  color: $fontAlert;
}

.settings {
  display: inline-flex;
  justify-content: space-around;
}
.settings .link {
  margin: 2rem;
}

.profiles {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 2rem;
}

.footer {
  display: flex;
  padding: 1rem;
  background: $ColorDefault;
  justify-content: center;
  font-weight: bolder;
  font-size: $fontSizeT;
  position: fixed;
  z-index: 1;
  width: 100%;

  bottom: 0;
}
.copyright {
  border-radius: $borderRadius;
  padding: 0 1rem;
  display: inline-flex;
}
.aboutUs {
  font-size: $fontSizeH;
  border: $borderSH;
  border-radius: $borderRadius;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  font-size: $fontSizeH2;
  font-weight: bolder;
}

.faIcon {
  color: $fontColorDefault;
  margin: auto;
}

.intro {
  text-align: center;
  max-width: 50vw;
  margin-bottom: 6rem;
}

.intro h1 {
  font-size: $fontSizeH;
  margin: 1rem;
}

.intro p {
  font-size: $fontSizeT;
  line-height: 1.6;
}


.warning {
  color: $fontAlert;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.dashboard {
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.dashboard .link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  margin: 2rem;
}

.overlay {
  position: relative;

  visibility: hidden;
  transition: height 0.5s ease-in-out;
  height: 0%;
}

.underlay {
  position: absolute;
  font-size: $fontSizeH;
  transition: font-size 0.5s ease-in-out;
}

.aboutUs:hover .overlay {
  height: 100%;
  visibility: visible;
}
.aboutUs:hover .underlay {
  font-size: 0;
}


@media (min-width: 320px) {


  .dashboard .link {
    margin: 0.5rem;
  }
  .profiles {
    flex-wrap: wrap;
  }

}

@media (min-width: 693px) {
 }

@media (min-width: 769px) {
  body {
    flex-direction: column;
  }

  .dashboard {
    flex-wrap: wrap;
  }
  .dashboard .link {
    margin: 1rem;
  }
  .profiles {
    flex-wrap: wrap;
  }

  .profiles .link {
    margin: 1rem;
  }
}

@media (min-width: 992px) {
  .profiles {
    flex-wrap: nowrap;
  }
}

@media (min-width: 1024px) {
  .profiles {
    flex-wrap: nowrap;
  }
  .dashboard.pro {
    flex-direction: column;
  }
} */
}

`;
