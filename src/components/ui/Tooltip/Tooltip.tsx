import { ReactNode } from 'react'

import { Container } from './styles'

interface ITooltip {
  children: ReactNode
}

export default function Tooltip({ children }: ITooltip) {
  return <Container>{children}</Container>
}
