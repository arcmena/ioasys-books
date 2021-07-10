import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        width: 100%;
        height: -webkit-fill-available;
    }
    body {
        font-family: Heebo, sans-serif;
        color: ${({ theme: { colors } }) => colors.black};
        ${({ theme: { mixins } }) => mixins.fillContainer};
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`
