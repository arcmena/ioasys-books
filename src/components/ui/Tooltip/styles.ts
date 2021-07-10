import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  position: absolute;

  padding: 16px;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;

  color: ${({ theme: { colors } }) => colors.white};

  background-color: ${({ theme: { colors } }) => rgba(colors.white, 0.4)};
  backdrop-filter: blur(2px);
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-style: solid;
    border-color: ${({ theme: { colors } }) => rgba(colors.white, 0.4)}
      transparent;
    border-width: 0 8px 10px;
    top: -10px;
    left: 10%;
    margin-left: -8px;
  }
`
