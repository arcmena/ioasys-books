import styled from 'styled-components'
import { rgba } from 'polished'

export const Container = styled.div`
  z-index: 1;

  position: fixed;

  width: 100%;
  height: 100%;

  background-color: ${({ theme: { colors } }) => rgba(colors.black, 0.4)};
  backdrop-filter: blur(2px);

  display: grid;
  grid-template-rows: 45px 1fr;

  > button {
    background-color: ${({ theme: { colors } }) => colors.white};

    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;

    border-radius: 50%;

    place-self: flex-end;

    margin: 16px 16px 0 0;
  }
`

export const Content = styled.div`
  display: grid;
  justify-content: center;
  overflow: auto;

  margin: 16px;

  @media (min-width: ${({ theme: { sizes } }) => sizes.md}) {
    align-items: center;
  }
`

export const ModalBody = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  max-width: ${({ theme: { sizes } }) => sizes.md};
  width: 100%;

  border-radius: 4px;

  padding: 24px;

  position: relative;
  overflow: inherit;

  .book__image {
    display: flex;
    justify-content: center;
    justify-self: center;

    > div {
      box-shadow: 0px 11.9008px 17.8512px rgba(0, 0, 0, 0.3);
    }
  }

  .book__info {
    margin-top: 24px;

    h1 {
      font-weight: 500;
      font-size: 28px;
      line-height: 40px;
    }

    h3 {
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;

      color: ${({ theme: { colors } }) => colors.purple};
    }

    h2 {
      font-weight: 500;
      font-size: 12px;
      line-height: 28px;

      margin: 32px 0 16px;
    }

    .book__description {
      div {
        display: flex;
        justify-content: space-between;

        span:first-child {
          font-size: 12px;
          font-weight: 500;

          color: ${({ theme: { colors } }) => colors.black_2};
        }

        span:last-child {
          font-size: 12px;
          line-height: 20px;

          color: ${({ theme: { colors } }) => colors.gray};
        }
      }
    }

    .book__review {
      font-size: 12px;
      line-height: 20px;

      color: ${({ theme: { colors } }) => colors.gray};

      svg {
        margin-right: 4px;
      }
    }
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.md}) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    height: 608px;

    .book__image {
      place-self: center;
    }

    .book__info {
      margin-top: 0;
      width: 276px;
      place-self: center;
    }

    .book__review {
      overflow-y: auto;
      padding: 5px;
      height: 130px;
    }
  }
`
