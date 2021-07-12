import styled from 'styled-components'

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;

  > div {
    justify-self: center;
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`
