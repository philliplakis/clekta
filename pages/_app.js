import "../styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
::-moz-selection {
  /* Code for Firefox */
  color: rgb(247, 90, 90);
  background: #20ffd7;
}

::selection {
  color: rgb(247, 90, 90);
  background: #20ffd7;
}

@font-face {
  font-family: "Giaza";
  src: url("https://clekta.vercel.app/fonts/giaza-webfont.woff") format("woff"),
    url("https://clekta.vercel.app/fonts/giaza-webfont.woff2") format("woff2"),
    url("https://clekta.vercel.app/fonts/giaza-webfont.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jet";
  src: url("https://clekta.vercel.app/fonts/JetBrainsMono-ExtraBold.ttf")
    format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jet";
  src: url("https://clekta.vercel.app/fonts/JetBrainsMono-Regular.ttf")
    format("truetype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jet";
  src: url("https://clekta.vercel.app/fonts/JetBrainsMono-ExtraLight.ttf")
    format("truetype");
  font-weight: 200;
  font-style: normal;
  font-display: swap;
}

`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}
