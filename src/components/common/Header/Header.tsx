import { MouseEventHandler } from 'react'

import Button from 'components/ui/Button'
import Icon from 'components/ui/Icon'
import Logo from '../Logo'

import User from 'types/User'

import { Container } from './styles'

interface IHeader {
  user: User | null
  onSignOut: MouseEventHandler<HTMLButtonElement>
}

export default function Header({ user, onSignOut }: IHeader) {
  return (
    <Container>
      <Logo variant="black" />
      <div>
        <span>
          Bem vindo, <span>{user?.name}</span>
        </span>
        <Button onClick={onSignOut}>
          <Icon name="logout" />
        </Button>
      </div>
    </Container>
  )
}
