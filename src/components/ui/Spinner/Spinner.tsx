import styled from 'styled-components'
import { rgba } from 'polished'

import { Spin } from 'styles/animations'

interface ISpinner {
  size: number
}

const Spinner = styled('div')<ISpinner>`
  width: ${({ size }) => (size ? size : '24px')};
  height: ${({ size }) => (size ? size : '24px')};
  border-radius: 50%;
  position: relative;
  border-top: 4px solid ${({ theme: { colors } }) => colors.purple};
  border-right: 4px solid ${({ theme: { colors } }) => colors.purple};
  border-bottom: 4px solid ${({ theme: { colors } }) => colors.purple};
  border-left: 4px solid ${({ theme: { colors } }) => rgba(colors.purple, 0.26)};
  transform: translateZ(0);
  animation: ${Spin} 1.1s infinite linear;
`

export default Spinner
