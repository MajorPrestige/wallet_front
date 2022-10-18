import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Circe';
    src: url('../Circe-Regular.eot');
    src: local('Circe'), local('Circe-Regular'),
        url('../Circe-Regular.eot?#iefix') format('embedded-opentype'),
        url('../Circe-Regular.woff2') format('woff2'),
        url('../Circe-Regular.woff') format('woff'),
        url('../Circe-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Circe';
    src: url('../Circe-Bold.eot');
    src: local('Circe Bold'), local('Circe-Bold'),
        url('../Circe-Bold.eot?#iefix') format('embedded-opentype'),
        url('../Circe-Bold.woff2') format('woff2'),
        url('../Circe-Bold.woff') format('woff'),
        url('../Circe-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*,
*::after,
*::before {
  box-sizing: inherit;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

body {
  font-family: 'Circe';
  font-weight: 400;
}

`

export default GlobalStyles