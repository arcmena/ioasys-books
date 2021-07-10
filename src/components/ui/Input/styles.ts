import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme: { colors } }) => rgba(colors.black, 0.32)};
  border-radius: 4px;
  backdrop-filter: blur(2px);

  height: 60px;
  max-width: 368px;

  padding: 8px 16px;

  font-weight: 400;

  > div {
    width: 100%;
  }

  p {
    opacity: 0.5;
    color: ${({ theme: { colors } }) => colors.white};

    font-size: 12px;
    line-height: 16px;
  }

  input {
    background: transparent;
    border: none;
    outline: none;

    font-size: 16px;
    line-height: 24px;

    color: ${({ theme: { colors } }) => colors.white};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme: { colors } }) =>
        colors.white} !important;
    }
  }
`
