import { InputHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  children?: ReactNode
}

export default function Input({ label, children, ...rest }: IInput) {
  return (
    <Container>
      <div>
        <label>
          <p>{label}</p>
          <input {...rest} />
        </label>
      </div>
      {children}
    </Container>
  )
}
