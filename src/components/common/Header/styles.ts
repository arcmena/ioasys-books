import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.header`
  margin: 42px 0;

  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    span {
      font-size: 12px;
      line-height: 16px;

      span {
        font-weight: 500;
      }
    }

    button {
      margin-left: 16px;

      border-radius: 50%;
      border: 1px solid ${({ theme: { colors } }) => rgba(colors.black, 0.2)};
    }
  }

  @media (max-width: ${({ theme: { sizes } }) => sizes.sm}) {
    span {
      display: none;
    }
  }
`
