import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.button`
  background-color: ${({ theme: { colors } }) => colors.white};
  border: none;

  &:disabled {
    background-color: ${({ theme: { colors } }) => lighten(0.1, colors.white)};
  }
`
