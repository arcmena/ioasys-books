/* eslint-disable react/display-name */
import { InputHTMLAttributes, ReactNode, forwardRef, FC } from 'react'
import { Container } from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  children?: ReactNode
}

const Input: FC<IInput> = forwardRef(({ label, children, ...rest }, ref) => {
  return (
    <Container>
      <div>
        <label>
          <p>{label}</p>
          {/* @ts-ignore */}
          <input ref={ref} {...rest} />
        </label>
      </div>
      {children}
    </Container>
  )
})

export default Input
