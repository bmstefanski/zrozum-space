import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*:root {
  --backgroundColor: #fff;
  --sidebarColor: #fff;
  --textColor: rgb(76, 86, 106);
  
  --defaultFont: 'Quicksand', serif;
  --defaultFontSize: 1.7rem;
  --defaultLineHeight: 1.6;
  --distincitveFont: 'Jura', sans-serif;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

body {
  background-color: var(--backgroundColor);
  color: var(--textColor);
  font-family: var(--defaultFont);
  font-size: var(--defaultFontSize);
  line-height: var(--defaultLineHeight);
}

section.section-with-break {
  border-top: 0.1rem solid rgba(0,0,0,0.1);
  margin: 3rem 0;
  padding: 3rem 0;
}
`

export default GlobalStyle