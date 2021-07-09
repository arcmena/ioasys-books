import { ButtonHTMLAttributes } from 'react'

import Spinner from '../Spinner'

import { Container } from './styles'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

export default function Button({
  disabled,
  loading = false,
  children,
  ...rest
}: IButton) {
  return (
    <Container disabled={disabled} {...rest}>
      {loading ? <Spinner /> : children}
    </Container>
  )
}
