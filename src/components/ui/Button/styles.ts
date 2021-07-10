import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.button`
  cursor: pointer;

  background-color: ${({ theme: { colors } }) => colors.white};
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    background-color: ${({ theme: { colors } }) => lighten(0.1, colors.white)};
  }
`
