import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.button`
  cursor: pointer;

  background-color: transparent;
  border: none;

  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.2s ease-in-out;

  &:disabled {
    cursor: default;

    svg {
      opacity: 0.4;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`
