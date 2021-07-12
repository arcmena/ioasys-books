import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  background-image: url('/books/bg.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  min-height: 100vh;

  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 16px;

  max-width: 1200px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px 0;

  span {
    font-size: 12px;
    line-height: 20px;

    span {
      font-weight: 500;
    }
  }

  button {
    border-radius: 50%;
    border: 1px solid ${({ theme: { colors } }) => rgba(colors.black, 0.2)};
  }

  button:first-child {
    margin-right: 16px;
  }
  button:last-child {
    margin-left: 16px;
  }
`
