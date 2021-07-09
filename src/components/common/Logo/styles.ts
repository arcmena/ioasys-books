import styled from 'styled-components'

import { ILogo } from './Logo'

export const Container = styled('div')<ILogo>`
  display: flex;

  svg {
    fill: ${({ variant, theme: { colors } }) =>
      variant === 'black' ? colors.black : colors.white};
  }

  h1 {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
    margin-left: 16px;

    color: ${({ variant, theme: { colors } }) =>
      variant === 'black' ? colors.black : colors.white};
  }
`
